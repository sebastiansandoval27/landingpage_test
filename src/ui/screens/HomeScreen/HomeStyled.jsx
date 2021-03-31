import styled from 'styled-components';
import back from '../../../assets/images/back1.jpg'

export const ContainerComp = styled.div`
  width:100vw;
  background-image: url(${back});
  background-position:center center;
  background-size:cover;
  background-repeat: no-repeat;
  
  padding: 70px 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  height:500px;
  
  @media screen and ( min-width: 768px) {
    height: 100vh;  
  }  
  
`;

export const CenterText = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  h2{
    font-family: Milliard;
    font-weight: 200;
    font-size: 26px;
    color:white;
    text-align:center;
    line-height: 30px;
  }

  @media screen and ( min-width: 992px) {
    h2{
      font-size: 35px;
      line-height: 50px;
    }
  }  
`;

export const BtnCall = styled.button`
  margin-top: 20px;
  width: 250px;
  height:auto;
  padding: 15px 10px;
  background-color: var(--pink);
  color:white;
  font-family:Poppins;
  border-radius: 25px;
  border:none;
  font-size: 14px;
  transition:all .4s ease;

  &:hover{
    background-color:var(--pink-dark);
  }

  @media screen and(min-width:992px){
    &:hover{
      background-color:red;
    }
  }
`;