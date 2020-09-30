import React, { useState, useEffect } from 'react';

import { QuestionWrapper, Text } from './styles';

const Question = ({ question, answers, nextQuestion, countQuestion }) => {


  // const [answersQuestion, setAnswersQuestion] = useState(
  //   [
  //     {
  //       quest: ""
  //     },
  //   ]
  // );

  // console.log(answersQuestion);
  // const {
  //   answer_a,
  //   answer_b,
  //   answer_c,
  //   answer_d,
  //   answer_e,
  //   answer_f
  // } = answers;

  // useEffect(() => { 



  //   setAnswersQuestion([...quest, {}])


  // }, [answers]);
  return (


    <QuestionWrapper>
      <Text count>Question: {countQuestion + 1}</Text>

      <Text quest>{question}</Text>
      {/* {console.log(answers)} */}

      {/* {
        answers.filter(answer => answer !== null).map(answer => (

        <Text>{answer.anser}</Text>
        ))
      } */}

      {/* {answer_a && <Text answer onClick={() => console.log(answer_a)}>{answer_a}</Text >}

      {answer_b && <Text answer>{answer_b}</Text >}

      {answer_c && <Text answer>{answer_c}</Text >}

      {answer_d && <Text answer>{answer_d}</Text >}

      {answer_e && <Text answer>{answer_e}</Text >}

      {answer_f && <Text answer>{answer_f}</Text >} */}


      <button onClick={nextQuestion}> Next</button>


    </QuestionWrapper>


  );
};

export default Question;