import React, { useState, useEffect } from 'react';

import {
  StyledIdentification,
  Form,
  StyledInput,
  Text,
  DangerText,
  ButtonSubmit
} from './styles';


const Identification = ({ name, dificulty, showDanger, submitForm }) => {



  return (
    <div>
      <Text tecTitle='true' >TEC.QUIZ</Text>
      <Text description='true'>Your technology quiz <span> {':)'}</span></Text>


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

            <Text label='true'>Dificulty</Text>
            <select
              name="dificulty"
              id="dificulty"
              onChange={(event) => dificulty.setValueDificulty(event.target.value)}

            >
              <option value="5">Easy</option>
              <option value="10">Medium</option>
              <option value="20">Hard</option>
            </select>

          </span>

          <ButtonSubmit danger={showDanger} type='submit'>START GAME</ButtonSubmit>
        </Form>

      </StyledIdentification>


    </div>
  );
};



export default Identification;