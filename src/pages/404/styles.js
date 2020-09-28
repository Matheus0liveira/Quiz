import styled from 'styled-components';



const Text = styled.h1`
    font-size: 2.5rem;

    span{
    font-size: 2.5rem;

    }


`;


export const StyledA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #BD93f9;
  margin-top: 2rem;
  cursor: pointer;



  svg{
    margin: 0 1rem;
  }

  transition: opacity 0.2s ease;
  &:hover{
    opacity: 0.5;
  }
`;

export default Text;