import styled, { css } from 'styled-components';


export const StyledIdentification = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

`;




export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem 0;

  span{
    margin: 2rem 0 0.5rem 0; 
    width: 80%;

    min-width: 30rem;

 

    input,select, option{
        width: 100%;
        height:  5rem;
        padding: 1rem;
        margin-top: 1rem ;
        background: #F8F8F2;
        border: 0;
        color: #44475A;


        ::placeholder{
        color: #44475A;

        }
    }

  }
  
`;


export const Text = styled.h1`

  ${props => props.label && css`
  font-size: 2rem;
  color: #F8F8F2;

  `};


  ${props => props.tecTitle && css`


  margin-bottom: 10rem;  
  color: #F8F8F2;

  font-size: min(8vw, 6rem);
  text-align: center;

  `};
  
`;


export const ButtonSubmit = styled.button`

  width: 80%;
  min-width: 30rem;
  height:  5rem;
  padding: 0 2rem;
  margin-top: 2rem;
  background: #BD93F9;
  color: #44475A;
  border: 0;
  font-weight: bold;


  cursor: pointer;
  transition: all .4s ease;

  &:hover{

    background: #44475A;
    color: #BD93F9;

  }
`;