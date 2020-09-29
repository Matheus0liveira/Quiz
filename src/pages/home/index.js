import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Identification from '../../components/identification';
import useUser from '../../utils/useUser';

import Footer  from './styles';

const Quiz = () => {


  const [name, setName] = useState('');
  const [valueCategory, setValueCategory] = useState('linux');
  const [valueDificulty, setValueDificulty] = useState('easy');
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

    setUser({name,valueCategory,valueDificulty});

    return router.push('/quiz');


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
