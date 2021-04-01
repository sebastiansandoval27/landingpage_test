import styled from "styled-components";

export const InputFieldComp = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  outline: none;
  background: var(--grey-input);
  padding: 10px;
  border-radius: 10px;
  margin: 15px 0px;

  i {
    color: var(--grey);
  }
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: var(--grey-dark);
`;
