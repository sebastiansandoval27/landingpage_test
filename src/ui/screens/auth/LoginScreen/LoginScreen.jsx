import React from "react";
import { useDispatch } from "react-redux";
import { Cover, LoginComp } from "./LoginScreenStyled";
import { useForm } from "../../../../hooks/useForm";
import { startLogin } from "../../../../actions/auth";
import FormComp from "../../../components/Form/FormComp/FormComp";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleInputChangeLogin] = useForm({
    email: "david@gmail.com",
    password: "123456",
  });

  const { email, password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  const formFields = {
    handleSubmit: handleLogin,
    handleInputChange: handleInputChangeLogin,
    values: [
      {
        key: 1,
        icon: "fas fa-user",
        name: "email",
        placeholder: "Email",
        value: email,
        type: "email",
      },
      {
        key: 2,
        icon: "fas fa-lock",
        name: "password",
        placeholder: "password",
        value: password,
        type: "password",
      },
    ],

    valueBtn: "Sign In",
    title: "LOGIN",
    question: "Not registered?",
    linkQuestion: "Create an account",
    route: "/auth/register",
    type: "login",
  };

  return (
    <LoginComp>
      <Cover>
        <FormComp
          handleSubmit={formFields.handleSubmit}
          handleInputChange={formFields.handleInputChange}
          values={formFields.values}
          title={formFields.title}
          valueBtn={formFields.valueBtn}
          route={formFields.route}
          question={formFields.question}
          linkQuestion={formFields.linkQuestion}
          type={formFields.type}
        />
      </Cover>
    </LoginComp>
  );
};

export default LoginScreen;
