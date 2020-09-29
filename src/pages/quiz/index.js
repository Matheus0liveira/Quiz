import React from 'react';

import axios from 'axios';

import useUSer from '../../utils/useUser';


const Quiz = ({ quiz }) => {

  const { user } = useUSer();
  return (
    <>
      <h1>Quiz</h1>
      {console.log(quiz)}



      <div >

        <h1>{quiz[1].question}</h1>
        <p>{quiz[1].answers.answer_a}</p>
        <p>{quiz[1].answers.answer_b}</p>
        <p>{quiz[1].answers.answer_c}</p>
        <p>{quiz[1].answers.answer_d}</p>
        <p>{quiz[1].answers.answer_e}</p>
        <p>{quiz[1].answers.answer_f}</p>
        <hr />
      </div>

    </>
  );
};

export async function getStaticProps() {


  const result = await axios.get('https://quizapi.io/api/v1/questions', {

    headers: { 'X-Api-Key': process.env.tokenAPI },

  });

  const quiz = result.data;

  return { props: { quiz } };
};

export default Quiz;