import styled from 'styled-components';

const Footer = styled.footer`

display: flex;
align-items: center;
justify-content: center;
background: #282A36;
position: fixed;
bottom: 0;
left: 0;
right: 0;
padding: 1rem 0;
p, a{
  font-size: 1.4rem;
}

a{
  text-decoration: none;
  color: #BD93F9;
  transition: opacity .2s ease;

    &:hover{
    opacity: 0.5;
  }

}
`;

export default Footer;