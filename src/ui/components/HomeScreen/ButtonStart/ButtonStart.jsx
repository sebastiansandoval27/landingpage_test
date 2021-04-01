import React from "react";
import styled from "styled-components";

export const BtnCall = styled.button`
  margin-top: 20px;
  width: 250px;
  height: auto;
  padding: 15px 10px;
  background-color: ${(props) => props.color};
  color: white;
  font-family: Poppins;
  border-radius: 25px;
  border: none;
  font-size: 14px;
  transition: all 0.4s ease;

  &:hover {
    background-color: var(--pink-dark);
  }
`;

const ButtonStart = ({ color }) => {
  return <BtnCall color={color}>START YOUR FREE TRIAL</BtnCall>;
};

export default ButtonStart;
