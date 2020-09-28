import React from 'react';
import axios from 'axios';

import Identification from '../../components/identification'

const Hello = ({ quiz }) => {
  return (
    <>
      {/* {quiz.map(quiz => (
        <div key={quiz.id}>
          <p >{quiz.question}</p>
          <hr />
          <h1>{quiz.answers.answer_a}</h1>
          <h1>{quiz.answers.answer_b}</h1>
          <h1>{quiz.answers.answer_c}</h1>
          <h1>{quiz.answers.answer_d}</h1>
          <h1>{quiz.answers.answer_e}</h1>
          <h1>{quiz.answers.answer_f}</h1>
          <hr />
          <hr />
        </div>
      ))}
      {console.log(quiz)} */}

      <Identification />
    </>
  );
};

Hello.getInitialProps = async () => {
  const result = await axios.get('https://quizapi.io/api/v1/questions', {

    headers: { 'X-Api-Key': 'lCYLQgZXpyARHxOsGt6qe59DiLJawH8CbOIwDLdl' },

  });

  return { quiz: result.data };
};

export default Hello;
