import React from "react";
import { InputFieldComp, Input } from "./InputFieldStyled";

const InputField = ({
  icon,
  value,
  name,
  placeholder,
  type,
  handleInputChange,
  minLength,
}) => {
  return (
    <InputFieldComp>
      <i className={icon}></i>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleInputChange}
        required
        minLength={minLength}
      />
    </InputFieldComp>
  );
};

export default InputField;
