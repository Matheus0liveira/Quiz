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


const Identification = () => {
  const [name, setName] = useState('');
  const [valueCategory, setValueCategory] = useState('linux');
  const [valueDificulty, setValueDificulty] = useState('easy');
  const [showDanger, setShowDanger] = useState(false);

  useEffect(() => {

    if(name ){
      setShowDanger(false);
    };
  },[name]);

  const handleSubmit = (event) => {

    event.preventDefault();
  

    if(!name) {
      
      return setShowDanger(true);
    };

    console.log({name, valueCategory, valueDificulty});

  };


  return (
    <div>
      <Text tecTitle='true' >TEQUIZ</Text>
      <Text description='true'>To start the game, fill out the form <span> {':)'}</span></Text>


      <StyledIdentification>

        <Form onSubmit={handleSubmit}>

          <span>
            <Text label='true'> Name</Text>
            
            <DangerText>{ showDanger && 'Name is required!'}</DangerText>
            <StyledInput
              placeholder='Type your name'
              danger={showDanger}
              onChange={(event) => setName(event.target.value)}
            />

          </span>

          <span>

            <Text label='true'>Category</Text>

            <select
              name="category"
              id="category"
              onChange={(event) => setValueCategory(event.target.value)}
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
              onChange={(event) => setValueDificulty(event.target.value)}

            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

          </span>

          <ButtonSubmit type='submit'>START GAME</ButtonSubmit>
        </Form>

      </StyledIdentification>

      <Footer>
        <p>

          Created By:
          
          <a target='_blank' href="https://github.com/Matheus0liveira"> Matheus Oliveira 💜</a>

        </p>
      </Footer>
    </div>
  );
};



export default Identification;