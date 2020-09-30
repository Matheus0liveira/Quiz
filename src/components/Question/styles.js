import styled, { css } from 'styled-components';


export const QuestionWrapper = styled.main`

  width: 50%;
`;
export const Text = styled.h1`

  ${props => props.answer && css`

    margin: 1rem 0;
    background: #F8F8F2;
    color: #282A36;
    padding: 1rem;
    transition: background .2s ease;
    cursor: pointer;

    &:hover{
      background: #B6B6B6;
    }
  `
  };

`;

