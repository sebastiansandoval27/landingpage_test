import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/authTypes";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const respuesta = await fetchWithoutToken(
      "auth/login",
      { email, password },
      "POST"
    );
    const body = await respuesta.json();

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
    }
  };
};

export const startRegister = (email, name, password) => {
  return async (dispatch) => {
    const respuesta = await fetchWithoutToken(
      "auth/new",
      { name, email, password },
      "POST"
    );
    const body = await respuesta.json();

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
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const respuesta = await fetchWithToken("auth/renew");
    const body = await respuesta.json();

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
