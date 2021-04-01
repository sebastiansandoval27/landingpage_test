import React from "react";
import { useDispatch } from "react-redux";
import { Cover, LoginComp } from "./LoginScreenStyled";
import { useForm } from "../../../../hooks/useForm";
import FormComp from "../../../components/Form/FormComp/FormComp";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleInputChangeLogin] = useForm({
    Email: "",
    Password: "",
  });

  const { Email, Password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    //dispatch(startLogin(lEmail, lPassword));
  };

  const formFields = {
    handleSubmit: handleLogin,
    handleInputChange: handleInputChangeLogin,
    values: [
      {
        key: "1",
        icon: "fas fa-user",
        name: "email",
        placeholder: "Email",
        value: Email,
      },
      {
        key: "2",
        icon: "fas fa-lock",
        name: "password",
        placeholder: "Password",
        value: Password,
      },
    ],

    valueBtn: "Sign In",
    title: "LOGIN",
    question: "Not registered?",
    linkQuestion: "Create an account",
    route: "/auth/register",
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
        />
      </Cover>
    </LoginComp>
  );
};

export default LoginScreen;
