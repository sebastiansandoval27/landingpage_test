import styled from "styled-components";

export const MessageSectionComp = styled.section`
  width: 100%;
  height: 200px;
  background: var(--pink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;

  p {
    font-family: Milliard;
    color: var(--white);
    text-align: center;
    font-weight: 500;
    line-height: 25px;
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
