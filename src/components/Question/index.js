import React, { useState, useEffect } from 'react';

import { QuestionWrapper, Text } from './styles';

const Question = ({ question, answers, nextQuestion, countQuestion }) => {


  return (


    <QuestionWrapper>
      <Text count>Question: {countQuestion}</Text>

      <Text quest>{question}</Text>
      {answers &&
        answers.map(answer => (

          <Text answer key={answer.id}>{answer.quest}</Text>
        ))
      }
      {console.log(answers)}




      <button onClick={nextQuestion}> Next</button>


    </QuestionWrapper>


  );
};

export default Question;