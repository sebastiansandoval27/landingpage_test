import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoutes = ({
  isLogged,
  component: Component,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      component={ (props) => (
        (isLogged)
          ? ( <Redirect to="/" /> ) 
          : ( <Component {...props} /> )
      )

      }
    />
  );
}


PrivateRoutes.propTypes={
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}


export default PrivateRoutes;
