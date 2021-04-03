import React from "react";
import styled from "styled-components";

const LoaderComp = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 22px;
    color: white;
    font-family: Poppins;
    font-weight: 700;
  }
`;

const Loader = () => {
  return (
    <LoaderComp>
      <h2>Cargando ...</h2>
    </LoaderComp>
  );
};

export default Loader;
