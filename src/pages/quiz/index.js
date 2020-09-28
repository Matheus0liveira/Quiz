import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Identification from '../../components/identification';
import useUser from '../../utils/useUser';

import Footer  from './styles';

const Quiz = ({ quiz }) => {


  const [name, setName] = useState('');
  const [valueCategory, setValueCategory] = useState('linux');
  const [valueDificulty, setValueDificulty] = useState('easy');
  const [showDanger, setShowDanger] = useState(false);


  const { user, setUser } = useUser();



  useEffect(() => {

    if (name) {
      setShowDanger(false);
    };
  }, [name]);


  console.log(name, valueCategory, valueDificulty );



  const handleSubmit = (event) => {

    event.preventDefault();


    if (!name) {

      return setShowDanger(true);

    };

    setUser({name,valueCategory,valueDificulty});


    console.log(user);

  };

  return (
    <>
      
      <Identification
        name={{ name, setName }}
        category={{ valueCategory, setValueCategory }}
        dificulty={{ valueDificulty, setValueDificulty }}
        submitForm={handleSubmit}
        showDanger={{ showDanger, setShowDanger }}
      />

      
      {console.log(quiz)}

      
      <Footer>
        <p>

          Created By:
          
          <a target='_blank' href="https://github.com/Matheus0liveira"> Matheus Oliveira 💜</a>

        </p>
      </Footer>
    </>
  );
};


export async function getServerSideProps(){

  
  const result = await axios.get('https://quizapi.io/api/v1/questions', {

    headers: { 'X-Api-Key': 'lCYLQgZXpyARHxOsGt6qe59DiLJawH8CbOIwDLdl' },

  });

  const quiz =  result.data;

  return { props: {quiz} };
};


export default Quiz;
