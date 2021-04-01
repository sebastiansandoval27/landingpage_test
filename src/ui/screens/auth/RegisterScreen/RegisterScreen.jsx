import React from "react";
import { useDispatch } from "react-redux";
import { Cover, RegisterComp } from "./RegisterScreenStyled";
import { useForm } from "../../../../hooks/useForm";
import FormComp from "../../../components/Form/FormComp/FormComp";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formRegisterValues, handleInputChangeRegister] = useForm({
    Name: "",
    Email: "",
    Password: "",
  });

  const { Name, Email, Password } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(Name, Email, Password);
    //dispatch(startLogin(lEmail, lPassword));
  };

  const formFields = {
    handleSubmit: handleRegister,
    handleInputChange: handleInputChangeRegister,
    values: [
      {
        key: "1fr",
        icon: "fas fa-user",
        name: "Name",
        placeholder: "Name",
        value: Name,
        type: "text",
      },
      {
        key: "2fr",
        icon: "fas fa-envelope",
        name: "Email",
        placeholder: "Email",
        value: Email,
        type: "email",
      },
      {
        key: "3",
        icon: "fas fa-lock",
        name: "Password",
        placeholder: "Password",
        value: Password,
        type: "password",
      },
    ],

    valueBtn: "Sign Up",
    title: "REGISTER",
    question: "Already have an account?",
    linkQuestion: "Sign in",
    route: "/auth/login",
  };

  return (
    <RegisterComp>
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
    </RegisterComp>
  );
};

export default RegisterScreen;
