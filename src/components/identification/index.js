import React, { useState, useEffect } from 'react';

import {
  StyledIdentification,
  Form,
  StyledInput,
  Text,
  DangerText,
  ButtonSubmit,
  Footer
} from './styles';


const Identification = ({ name, category, dificulty, showDanger, submitForm }) => {


  return (
    <div>
      {console.log('refresh')}
      <Text tecTitle='true' >TEQUIZ</Text>
      <Text description='true'>To start the game, fill out the form <span> {':)'}</span></Text>


      <StyledIdentification>

        <Form onSubmit={submitForm}>

          <span>
            <Text label='true'> Name</Text>

            <DangerText>{showDanger.showDanger && 'Name is required!'}</DangerText>
            <StyledInput
              placeholder='Type your name'
              danger={showDanger.showDanger}
              onChange={(event) => name.setName(event.target.value)}
            />

          </span>

          <span>

            <Text label='true'>Category</Text>

            <select
              name="category"
              id="category"
              onChange={(event) => category.setValueCategory(event.target.value)}
            >
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

            <Text label='true'>Dificulty</Text>
            <select
              name="dificulty"
              id="dificulty"
              onChange={(event) => dificulty.setValueDificulty(event.target.value)}

            >
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