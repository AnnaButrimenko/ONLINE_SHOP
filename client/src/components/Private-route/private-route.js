import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Component {...props} />
      )}
    />
  );
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired
};