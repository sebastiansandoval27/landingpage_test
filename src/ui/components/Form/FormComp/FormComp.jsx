import React from "react";
import { AccountQuestion, Form, FormName, Logo } from "./FormCompStyled";
import InputField from "../InputField/InputField";
import BtnForm from "../BtnForm/BtnForm";
import { NavLink } from "react-router-dom";

const FormComp = ({
  handleSubmit,
  handleInputChange,
  values,
  title,
  valueBtn,
  question,
  linkQuestion,
  route,
  type,
}) => {
  return (
    <>
      <FormName>
        <div className="logo-name">
          <Logo>
            Achoo <span>BETA</span>
          </Logo>
          <h3>{title.toUpperCase()}</h3>
        </div>
      </FormName>
      <Form>
        <form onSubmit={handleSubmit} autoComplete="off">
          {values.map((input) => (
            <InputField
              key={input.key}
              icon={input.icon}
              handleInputChange={handleInputChange}
              placeholder={input.placeholder}
              name={input.name}
              type={input.type}
              value={input.value}
            />
          ))}
          <BtnForm type="submit" value={valueBtn} />
        </form>
        <AccountQuestion>
          <h2>{question}</h2>
          <NavLink to={route}>{linkQuestion}</NavLink>
        </AccountQuestion>
      </Form>
    </>
  );
};

export default FormComp;
