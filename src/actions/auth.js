import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/authTypes";
import swal from "sweetalert";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const response = await fetchWithoutToken(
      "auth/login",
      { email, password },
      "POST"
    );
    const body = await response.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
          email: body.email,
        })
      );
    } else {
      swal({
        title: "Error",
        text: body.msg,
        icon: "error",
        timer: 2000,
        buttons: false,
      });
    }
  };
};

export const startRegister = (email, name, password) => {
  return async (dispatch) => {
    const response = await fetchWithoutToken(
      "auth/new",
      { name, email, password },
      "POST"
    );
    const body = await response.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
          email: body.email,
        })
      );
    } else {
      swal({
        title: "Error",
        text: body.msg,
        icon: "error",
        timer: 2000,
        buttons: false,
      });
    }
  };
};

export const startUpdate = (uid, email, name) => {
  return async (dispatch) => {
    const response = await fetchWithoutToken(
      `auth/update/${uid}`,
      { name, email },
      "POST"
    );
    const body = await response.json();

    if (body.ok) {
      dispatch(startGetUser(uid));
      swal({
        title: "Updated",
        text: body.msg,
        icon: "success",
        timer: 2000,
        buttons: false,
      });
    } else {
      console.log(body.msg);
      swal({
        title: "Error",
        text: body.msg,
        icon: "error",
        timer: 2000,
        buttons: false,
      });
    }
  };
};

export const startGetUser = (uid) => {
  return async (dispatch) => {
    const response = await fetchWithoutToken(`auth/user/`, { uid }, "POST");
    const body = await response.json();

    if (body.ok) {
      dispatch(setUser(body.user));
    } else {
      console.log(body.msg);
      swal({
        title: "Error",
        text: body.msg,
        icon: "error",
        timer: 2000,
        buttons: false,
      });
    }
  };
};

export const startCheck = () => {
  return async (dispatch) => {
    const response = await fetchWithToken("auth/renew");

    if (response) {
      const body = await response.json();

      if (body.ok) {
        localStorage.setItem("token", body.token);
        localStorage.setItem("token-init-date", new Date().getTime());

        dispatch(
          login({
            uid: body.uid,
            name: body.name,
            email: body.email,
          })
        );
      } else {
        dispatch(checkingFinish());
      }
    } else {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const setUser = (user) => ({
  type: types.authGetUser,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });
