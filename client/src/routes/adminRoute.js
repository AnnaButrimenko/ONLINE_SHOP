import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { PropTypes } from 'prop-types';

import RoutesName from '../routes-list';
import Login from '../components/Login/login';

export default function AdminRoute(props) {
  const { component: Component, loggedIn, customer, closeModal, modalIsVisible, ...rest } = props;

  if (!loggedIn) {
    return (
      <Route
        {...rest}
        render={() => (<Login close={closeModal} visible={modalIsVisible} />)}
      />
    );
  }
  if (!customer.isAdmin) {
    return <Redirect to={RoutesName.forbidden} />;
  }
  return <Route {...rest} component={Component} />;
}

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalIsVisible: PropTypes.bool.isRequired,
  customer: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
