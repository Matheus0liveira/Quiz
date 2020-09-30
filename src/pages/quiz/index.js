import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

import useUSer from '../../utils/useUser';

import Question from '../../components/Question';
import Results from '../../components/Results';



const Quiz = ({ quiz }) => {
  const [quizQuestion, setQuizQuestion] = useState([{

    question: '',
    answers: {
      answer_a: "",
      answer_b: "",
      answer_c: "",
      answer_d: "",
      answer_e: "",
      answer_f: "",
    },
    correct_answers: {
      answer_a: "",
      answer_b: "",
      answer_c: "",
      answer_d: "",
      answer_e: "",
      answer_f: "",
    }
  }]);

  const [countQuestion, setCountQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const { user } = useUSer();

  useEffect(() => {

    if (!user.name) {

      return Router.push('/home');

    };

    const newQuiz = quiz.map((quiz, index) => {

      if (index < user.dificulty) {

        return {

          question: quiz.question,
          answers: quiz.answers,
          correct_answers: quiz.correct_answers

        };
      };

    }).filter(quiz => quiz !== undefined);

    return setQuizQuestion(newQuiz);


  }, [user]);

  const handleNextQuest = () => {


    console.log('Clicked');

    countQuestion < quizQuestion.length - 1

      ?

      (
        setCountQuestion(prevState => prevState + 1)
      )

      :

      (
        setShowResults(true)
      )


  };

  return (
    <>
      {console.log(quizQuestion)}
      {/* {console.log(quiz)} */}

      {!showResults
        ?
        (

          <Question
            countQuestion={countQuestion}
            question={quizQuestion[countQuestion].question}
            answers={quizQuestion[countQuestion].answers}
            // correct_answers={quizQuestion[countQuestion].correct_answers}
            nextQuestion={handleNextQuest}
          />

        )
        :
        (

          <Results />

        )
      }




      <div >


        {/* <h1>{quiz[1].question}</h1>
        <p>{quiz[1].answers.answer_a}</p>
        <p>{quiz[1].answers.answer_b}</p>
        <p>{quiz[1].answers.answer_c}</p>
        <p>{quiz[1].answers.answer_d}</p>
        <p>{quiz[1].answers.answer_e}</p>
        <p>{quiz[1].answers.answer_f}</p> */}


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