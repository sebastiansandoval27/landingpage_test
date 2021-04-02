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

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });
