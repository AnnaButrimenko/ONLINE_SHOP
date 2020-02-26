import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  MenuItem,
  ListItemIcon,
  useTheme,
  Divider,
  Drawer,
  Typography
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import GroupIcon from '@material-ui/icons/Group';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PlaceIcon from '@material-ui/icons/Place';
import HomeIcon from '@material-ui/icons/Home';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';
import useStyles from './_navbar';
import RoutesName from '../../../routes-list';
import { resetFilters } from '../../../redux/actions/filter';

export default function NavBar({ toggleCatalog, hideCatalog, children, drawer, toggleDrawer }) {
  const dispatch = useDispatch();

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      border: '1px solid transparent',
      transition: 'fontWeight 0.4s ease',
      '&:hover': {
        borderLeft: `1px solid ${theme.palette.background.primary}`,
        borderRight: `1px solid ${theme.palette.background.primary}`,
        fontWeight: 600,
        backgroundColor: 'transparent',
      },
      '& a': {
        transition: 'transform 0.4s ease',
        '&:hover': {
          transform: 'translateY(-5px)'
        }
      }
    },
  }))(MenuItem);

  const classes = useStyles();
  const theme = useTheme();
  const { mainCategories, allCategories } = useSelector((state) => state.categoriesReducer.catalog);
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [drawerCat, drawerCatIsOpen] = useState(false);
  const [drawerSubCat, drawerSubCatIsOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');

  const toggleDrawerCat = (open) => {
    drawerCatIsOpen(open);
  };

  const toggleDrawerSubCat = (value, open) => {
    setCurrentCategory(value);
    drawerSubCatIsOpen(open)
  };

  const toggleLastDrawer = (open) => {
    drawerSubCatIsOpen(open);
  };

  const menuItems = [
    {
      title: 'HOME',
      route: RoutesName.home
    },
    {
      title: 'CATALOG',
      route: ''
    },
    {
      title: 'ABOUT US',
      route: RoutesName.aboutUs
    },
    {
      title: 'DELIVERY & PAYMENT',
      route: RoutesName.delivery
    },
    {
      title: 'CONTACTS',
      route: RoutesName.contacts
    },
  ];

  const listItemIcon = (menuItem) => {
    switch (menuItem) {
      case 'HOME': {
        return (<HomeIcon />)
      }
      case 'CATALOG': {
        return (<RestaurantMenuIcon />)
      }
      case 'ABOUT US': {
        return (<GroupIcon />)
      }
      case 'DELIVERY & PAYMENT': {
        return (<LocalShippingIcon />)
      }
      case 'CONTACTS': {
        return (<PlaceIcon />)
      }
      default:
        return (<HomeIcon />)
    }
  };

  const renderMainMenu = () => (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"

    >
      {menuItems.map((menuItem) => {
        if (menuItem.title === 'CATALOG') {
          return (
            <Fragment key={menuItem.title}>
              <MenuItem
                onClick={() => {
                  toggleDrawerCat(true);
                  toggleDrawer(false);
                }}
                className={classes.nestedMenuItem}
              >
                <span className={classes.headerMenuListHyperlink}>
                  <ListItemIcon
                    className={classes.icon}
                  >
                    {listItemIcon(menuItem.title)}
                  </ListItemIcon>
                  <Typography variant="inherit">{menuItem.title}</Typography>
                </span>
                <KeyboardArrowRightIcon />
              </MenuItem>
              <Divider />
            </Fragment>
          )
        }

        return (
          <Fragment key={menuItem.title}>
            <MenuItem
              onClick={() => {
                toggleDrawer(false);
              }}
            >
              <Link
                to={menuItem.route}
                className={classes.headerMenuListHyperlink}
              >
                <ListItemIcon className={classes.icon}>{listItemIcon(menuItem.title)}</ListItemIcon>
                <Typography variant="inherit">{menuItem.title}</Typography>
              </Link>
            </MenuItem>
            <Divider />
          </Fragment>
        )
      })}
    </List>
  );

  const renderCatalogMenu = () => (
    <List>
      <MenuItem
        onClick={() => {
          toggleDrawerCat(false);
          toggleDrawer(true);
        }}
        className={classes.headerMenuListHyperlink}
      >
        <KeyboardArrowLeftIcon className={classes.icon} />
        CATALOG
      </MenuItem>
      <Divider />

      {mainCategories.map((category) => (
        <MenuItem
          onClick={() => {
            dispatch(resetFilters());
            toggleDrawerSubCat(category.id, true);
            toggleDrawerCat(false);
          }}
          key={category.id}
          className={classes.nestedMenuItem}
          label={category.name}
        >
          <Link
            to={`${RoutesName.products}/${category.id}`}
            key={category.id}
            className={classes.headerMenuListHyperlink}
          >
            {category.name}
          </Link>
          <KeyboardArrowRightIcon />
        </MenuItem>
      ))}
    </List>
  );

  const renderSubCatalogMenu = () => (
    <List>
      <MenuItem
        onClick={() => {
          toggleLastDrawer(false);
          toggleDrawerCat(true)
        }}
        className={classes.headerMenuListHyperlink}
      >
        <KeyboardArrowLeftIcon className={classes.icon} />
        {currentCategory}
      </MenuItem>
      <Divider />

      <MenuItem
        onClick={() => {
          toggleLastDrawer(false);
        }}
      >
        <Link
          to={`${RoutesName.products}/${currentCategory}`}
          className={classes.headerMenuListHyperlink}
        >
          Shop all
        </Link>
      </MenuItem>

      {allCategories.filter(
        (category) => category.parentId === currentCategory
      )
        .map((subCategory) => (
          <MenuItem
            key={subCategory.id}
            onClick={() => {
              dispatch(resetFilters());
              toggleLastDrawer(false);
            }}
          >
            <Link
              to={`${RoutesName.products}/${currentCategory}/${subCategory.id}`}
              className={classes.headerMenuListHyperlink}
              key={subCategory.id}
            >
              {subCategory.name}
            </Link>
          </MenuItem>
        ))}
    </List>
  );

  const renderDesktopMenu = () => (
    <>
      {menuItems.map((menuItem) => {
        if (menuItem.title === 'CATALOG') {
          return (
            <StyledMenuItem
              className={`js_header-menu-list-item ${classes.headerMenuListItem}`}
              onMouseLeave={hideCatalog}
              onClick={toggleCatalog}
              key={menuItem.title}
            >
              {menuItem.title}
            </StyledMenuItem>
          )
        } if (menuItem.title === 'HOME') {
          return null
        }
        return (
          <StyledMenuItem
            className={classes.menuItem}
            key={menuItem.title}
          >
            <Link to={menuItem.route} className={classes.headerMenuListHyperlink}>
              {menuItem.title}
            </Link>
          </StyledMenuItem>
        )
      })}
    </>
  );

  return (
    // mobile
    <>
      {!isDesktop && (
        <>
          <Drawer
            open={drawer}
            onClose={() => toggleDrawer(false)}
            transitionDuration={500}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {renderMainMenu()}
          </Drawer>

          {/* Category */}
          <Drawer
            open={drawerCat}
            onClose={() => toggleDrawerCat(false)}
            transitionDuration={500}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {renderCatalogMenu()}
          </Drawer>
          {/* Subcategory */}
          <Drawer
            open={drawerSubCat}
            onClose={() => toggleDrawerSubCat(false)}
            transitionDuration={500}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {renderSubCatalogMenu()}
          </Drawer>
        </>
      )}

      {/* Desktop */}
      {isDesktop && (
        <>
          {renderDesktopMenu()}
        </>
      )}
      {children}
    </>
  )
}

NavBar.propTypes = {
  toggleCatalog: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  hideCatalog: PropTypes.func.isRequired,
  drawer: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
