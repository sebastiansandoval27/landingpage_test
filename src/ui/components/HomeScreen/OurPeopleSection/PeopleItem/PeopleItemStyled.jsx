import styled from "styled-components";

export const PeopleItemCom = styled.div`
  width: 270px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px 0px;
`;

export const PhotoPeopleItem = styled.div`
  width: 100%;
  height: 50%;
  justify-self: flex-start;

  img {
    width: 100%;
  }
`;

export const TextPeopleItem = styled.div`
  width: 100%;
  height: auto;
  margin-top: 25px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;
  font-family: Poppins;
  font-weight: 200;

  h3 {
    color: var(--grey-dark);
    font-size: 12px;
  }

  p {
    color: var(--grey);
    font-size: 12px;
    line-height: 18px;
    margin: 10px 0px;
  }

  hr {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  span {
    color: #55daf0;
    font-weight: 500;
  }
`;
