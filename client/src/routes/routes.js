import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Catalog from '../components/Catalog/catalog'
import Login from '../components/Login/login';
import ProductPage from '../components/Product-page/product-page'
import AdminHome from '../components/Admin/Home/home'
import NoMatch from '../components/No-match/no-match'
import RoutesName from '../routes-list';

import AdminRoute from './adminRoute';
import ProtectedRoute from './protectedRoute';
import CartPage from '../pages/cart/cart'
import HomePage from '../pages/home/home';
import AboutUsPage from '../pages/about-us/about-us';
import ContactsPage from '../pages/contacts/contacts';
import SignUpPage from '../pages/sign-up/sign-up'
import DeliveryPage from '../pages/delivery/delivery';
import ProfilePage from '../pages/profile/profile';
import FavoritesPage from '../pages/favorites/favorites'
import CheckoutPage from '../pages/checkout/checkout';
import CheckoutStatus from '../components/Checkout/Status/status';
import OrdersPage from '../pages/orders/orders';
import ForbiddenPage from '../pages/forbidden/forbidden'

export default function Routes() {
  const { loggedIn, customer } = useSelector((state) => state.user);
  const { registration } = useSelector((state) => state.user);
  const [protectedClosing, setProtectedClosing] = useState(false);
  const mainCategory = useSelector((state) => state.categoriesReducer.catalog.mainCategories);
  const [modalIsVisible, setModalVisibility] = useState(!loggedIn);
  const closeModal = () => {
    setModalVisibility(false);
  };

  if (!loggedIn && !modalIsVisible && !registration) {
    setModalVisibility(true);
    setProtectedClosing(true)
  }

  useEffect(() => () => setProtectedClosing(false));

  return (
    <Switch>
      {protectedClosing && <Redirect to={RoutesName.home} />}

      <Route path={RoutesName.signUp} component={SignUpPage} />

      <Route
        path={RoutesName.login}
        render={() => <Login visible={modalIsVisible} close={closeModal} />}
      />

      <ProtectedRoute
        exact
        path={RoutesName.personalData}
        loggedIn={loggedIn}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={ProfilePage}
      />

      <ProtectedRoute
        exact
        path={RoutesName.myOrders}
        loggedIn={loggedIn}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={OrdersPage}
      />

      <ProtectedRoute
        exact
        path={RoutesName.favorites}
        loggedIn={loggedIn}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={FavoritesPage}
      />

      <Route
        path={`${RoutesName.products}/:category/:subCategory`}
        exact
        render={({ match }) => {
          const { category, subCategory } = match.params;
          if (!mainCategory.find((el) => el.id === category)) {
            return <NoMatch />
          }
          return <Catalog assortment={subCategory} />
        }}
      />

      <Route
        path={`${RoutesName.products}/:categoryOrID`}
        render={({ match, location }) => {
          const { categoryOrID } = match.params;
          if (isNaN(categoryOrID)) {
            if (!mainCategory.find((el) => el.id === categoryOrID) && categoryOrID !== 'search') {
              return <NoMatch />
            }
            return <Catalog assortment={categoryOrID} />
          }
          const { pathname: url } = location;
          return (
            <ProductPage
              itemNo={categoryOrID}
              itemUrl={url}
              assortment={categoryOrID}
            />
          )
        }}
      />

      <Route path={RoutesName.checkout} exact component={CheckoutPage} />
      <Route path={RoutesName.orderConfirmation} component={CheckoutStatus} />
      <Route path={RoutesName.cart} component={CartPage} />
      <Route path={RoutesName.aboutUs} component={AboutUsPage} />
      <Route path={RoutesName.delivery} component={DeliveryPage} />
      <Route path={RoutesName.contacts} component={ContactsPage} />

      <AdminRoute
        exact
        path={RoutesName.adminHome}
        loggedIn={loggedIn}
        customer={customer}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={AdminHome}
      />

      <Route path={RoutesName.home} exact>
        <HomePage />
      </Route>
      <Route path={RoutesName.forbidden} exact>
        <ForbiddenPage />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
