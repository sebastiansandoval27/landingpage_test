import styled from 'styled-components';

export const ContainerMission = styled.section`
  width:100%;
  height: auto;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 20px;
`;


export const Mission = styled.div`
  width:100%;
  height: auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 0px;
  margin: 50px 0px;

  h2{
    font-family: Milliard;
    font-weight: 500;
    color:var(--grey-dark);
  }
  p{
    margin-top: 20px;
    font-family: Milliard;
    font-weight: 200;
    color: var(--grey);
    text-align:center;
    line-height: 20px;
  }

  @media screen and ( min-width: 768px) {
    width: 85%;
    h2{
      font-size: 25px;
    }
    p{
      line-height: 25px;
    }
  }
`;