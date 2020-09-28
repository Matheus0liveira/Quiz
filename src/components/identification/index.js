import React from 'react';

import { StyledIdentification, Description, Form, Text, ButtonSubmit, Footer } from './styles';


const Identification = () => {

  const handleSubmit = (event) => {

    event.preventDefault();
    alert('Clicked');

  }
  return (
    <div>
      <Text tecTitle >TEQUIZ</Text>
      <StyledIdentification>

        <Form onSubmit={handleSubmit}>
          <span>

            <Text label={true}> Name</Text>
            <input placeholder='Type your name' />

          </span>

          <span>

            <Text label={true}>Category</Text>
            <select name="category" id="category">
              <option value="linux">Linux</option>
              <option value="devOps">DevOps</option>
              <option value="networking">Networking</option>
              <option value="programming">Programming</option>
              <option value="cloud">Cloud</option>
              <option value="docker">Docker</option>
              <option value="kubernetes">Kubernetes</option>
            </select>

          </span>

          <span>

            <Text label={true}>Dificulty</Text>
            <select name="dificulty" id="dificulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

          </span>

          <ButtonSubmit type='submit'>START GAME</ButtonSubmit>
        </Form>

      </StyledIdentification>

      <Footer>Created By: <a target='_blank' href="https://github.com/Matheus0liveira"> Matheus Oliveira 💜</a> </Footer>
    </div>
  );
};



export default Identification;