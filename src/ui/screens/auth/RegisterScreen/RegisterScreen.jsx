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
    //dispatch(startLogin(lEmail, lPassword));
  };

  const formFields = {
    handleSubmit: handleRegister,
    handleInputChange: handleInputChangeRegister,
    values: [
      {
        key: "1",
        icon: "fas fa-user",
        name: "nmae",
        placeholder: "Name",
        value: Name,
      },
      {
        key: "2",
        icon: "fas fa-envelope",
        name: "email",
        placeholder: "Email",
        value: Email,
      },
      {
        key: "3",
        icon: "fas fa-lock",
        name: "password",
        placeholder: "Password",
        value: Password,
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
