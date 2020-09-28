import React from 'react';

import { StyledIdentification, Description, Form, Text, ButtonSubmit } from './styles';


const Identification = () => {

  const handleSubmit = (event) => {

    event.preventDefault();
    alert('Clicked');

  }
  return (
    <div>
      <Text tecTitle >Technological QUIZ</Text>
      <StyledIdentification>

        <Form onSubmit={handleSubmit}>
          <span>

            <Text label> Name</Text>
            <input placeholder='Type your name' />

          </span>

          <span>

            <Text label>Category</Text>
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

            <Text label>Dificulty</Text>
            <select name="dificulty" id="dificulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

          </span>

          <ButtonSubmit type='submit'>START GAME</ButtonSubmit>
        </Form>

      </StyledIdentification>
    </div>
  );
};



export default Identification;