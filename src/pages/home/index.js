import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Identification from '../../components/Identification';
import useUser from '../../utils/useUser';

import Footer  from './styles';

const Quiz = () => {


  const [name, setName] = useState('');
  const [valueDificulty, setValueDificulty] = useState('5');
  const [showDanger, setShowDanger] = useState(false);


  const { setUser } = useUser();

  const router = useRouter();



  useEffect(() => {

    if (name) {
      setShowDanger(false);
    };
  }, [name]);

  

  const handleSubmit = (event) => {

    event.preventDefault();


    if (!name) {

      return setShowDanger(true);

    };
    
    setUser({name,dificulty: valueDificulty});

    return router.push('/quiz');
  };


  
  return (
    <>
      
      <Identification
        name={{ name, setName }}
        dificulty={{ valueDificulty, setValueDificulty }}
        submitForm={handleSubmit}
        showDanger={{ showDanger, setShowDanger }}
      />
      
      <Footer>
        <p>

          Created By:
          
          <a target='_blank' href="https://github.com/Matheus0liveira"> Matheus Oliveira 💜</a>

        </p>
      </Footer>
    </>
  );
};





export default Quiz;
