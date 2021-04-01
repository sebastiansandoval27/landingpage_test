import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

/* import { useDispatch, useSelector } from "react-redux"; */
import { useDispatch } from "react-redux";
import { startChecking } from "../actions/auth";

import PublicRoutes from "./PublicRoutes.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import LoginScreen from "../ui/screens/auth/LoginScreen/LoginScreen";
import HomeScreen from "../ui/screens/HomeScreen/HomeScreen";
import RegisterScreen from "../ui/screens/auth/RegisterScreen/RegisterScreen";

const AppRouter = () => {
  const dispatch = useDispatch();
  //const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  /* if (checking) {
    return <h5>Espere...</h5>;
  } */

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            exact
            path="/auth/login"
            component={LoginScreen}
            /* isLogged={!!uid} */
            isLogged={false}
          />
          <PublicRoutes
            exact
            path="/auth/register"
            component={RegisterScreen}
            /* isLogged={!!uid} */
            isLogged={false}
          />
          <PrivateRoutes
            exact
            path="/"
            component={HomeScreen}
            /* isLogged={!!uid} */
            isLogged={false}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
