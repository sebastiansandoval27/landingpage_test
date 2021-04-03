import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { startCheck } from "../actions/auth";

import PublicRoutes from "./PublicRoutes.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import LoginScreen from "../ui/screens/auth/LoginScreen/LoginScreen";
import HomeScreen from "../ui/screens/HomeScreen/HomeScreen";
import RegisterScreen from "../ui/screens/auth/RegisterScreen/RegisterScreen";
import SettingsScreen from "../ui/screens/SettingsScreen/SettingsScreen";
import Loader from "../ui/components/Loader/Loader";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startCheck());
  }, [dispatch]);

  if (checking) {
    return <Loader />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            exact
            path="/auth/login"
            component={LoginScreen}
            isLogged={!!uid}
          />
          <PublicRoutes
            exact
            path="/auth/register"
            component={RegisterScreen}
            isLogged={!!uid}
          />
          <PrivateRoutes
            exact
            path="/"
            component={HomeScreen}
            isLogged={!!uid}
          />
          <PrivateRoutes
            exact
            path="/settings"
            component={SettingsScreen}
            isLogged={!!uid}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
