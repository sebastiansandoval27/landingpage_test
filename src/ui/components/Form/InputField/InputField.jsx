import React from "react";
import { InputFieldComp, Input } from "./InputFieldStyled";

const InputField = ({
  icon,
  value,
  name,
  placeholder,
  type,
  handleInputChange,
}) => {
  return (
    <InputFieldComp>
      <i class={icon}></i>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    </InputFieldComp>
  );
};

export default InputField;
