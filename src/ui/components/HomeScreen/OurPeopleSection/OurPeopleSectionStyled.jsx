import styled from "styled-components";

export const OurPeopleComp = styled.section`
  width: 100%;
  height: auto;
  background-color: var(--grey-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-bottom: 50px;
`;

export const Title = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 50px 0px;

  h2 {
    font-family: Milliard;
    font-size: 26px;
    font-weight: 200;
    color: var(--grey-dark);
  }
  p {
    margin-top: 20px;
    font-family: Milliard;
    font-weight: 200;
    color: var(--grey);
    text-align: center;
    line-height: 23px;
  }

  @media screen and (min-width: 768px) {
    width: 85%;
    h2 {
      font-size: 25px;
    }
    p {
      line-height: 25px;
    }
  }

  @media screen and (min-width: 992px) {
    width: 40%;
    h2 {
      font-size: 20px;
    }
    p {
      line-height: 25px;
    }
  }
`;

export const People = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
  }
`;
