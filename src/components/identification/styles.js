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
  width: 100vw;
  height: 100%;
  padding: 2rem 0;

  span{
    margin: 2rem 0 0.5rem 0; 
    width: 30%;

    min-width: 30rem;

    

    select, option{
        font-weight: bold;
        width: 100%;
        height:  5rem;
        padding: 1rem;
        margin-top: 1rem ;
        background: #F8F8F2;
        border: 0;
        color: #44475A;
    }

  }
  
`;

export const StyledInput = styled.input`

  font-weight: bold;
  width: 100%;
  height:  5rem;
  padding: 1rem;
  margin-top: 1rem ;
  background: #F8F8F2;
  border: 0;
  color: #44475A;
  ::placeholder{
    color:  #44475A;

    };
 ${props => props.danger && css` 

  border: 0.3rem solid #FF5555;

  ::placeholder{
      color:  #FF5555;

      };
   `
  }; 

`;


export const Text = styled.h1`

${props => props.label && css`

    font-size: 2rem;
    color: #F8F8F2;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;

  `};


${props => props.tecTitle && css`

    font-size: min(14vw, 6rem); 
    margin-bottom: 10rem;  
    color: #F8F8F2;
    text-align: center;
    font-weight: bold;

  `};
${props => props.description && css`

    text-align: center;
    font-size: min(4vw, 1.9rem); 
    color: #BD93F9;

    font-weight: bold;
    letter-spacing: 0.1rem;
    



  `};

`;


export const ButtonSubmit = styled.button`
width: 30%;
min-width: 30rem;
height: 5rem;
padding: 0 2rem;
margin-top: 4rem;
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


export const DangerText = styled.p`

  margin: 1rem 0 -1rem 0;
  color: #FF5555;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;