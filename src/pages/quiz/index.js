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
      answer_a_correct: "",
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

  }, [user]);

  useEffect(() => {

    const newQuiz = {

      question: quiz[countQuestion].question,
      answers: quiz[countQuestion].answers,
      correct_answers: quiz[countQuestion].correct_answers

    };

    setQuizQuestion(newQuiz);
    setCountQuestion(prevState => prevState + 1);



  }, []);



  const handleNextQuest = () => {
    if (countQuestion < user.dificulty) {

      const newQuiz = {

        question: quiz[countQuestion].question,
        answers: quiz[countQuestion].answers,
        correct_answers: quiz[countQuestion].correct_answers

      };


      setCountQuestion(prevState => prevState + 1);
      setQuizQuestion(newQuiz);
    };

  };

  return (
    <>

      {!showResults
        ?
        (

          <Question
            countQuestion={countQuestion}
            question={quizQuestion.question}
            answers={quizQuestion.answers}
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



      </div>

    </>
  );
};

export async function getStaticProps() {


  const { data } = await axios.get('https://quizapi.io/api/v1/questions', {


    headers: { 'X-Api-Key': process.env.tokenAPI },


  });

  const newQuiz = data.map(quiz => {

    return {

      id: quiz.id,
      question: quiz.question,
      answers: [
        {
          id: 1,
          quest: quiz.answers.answer_a,
        },
        {
          id: 2,
          quest: quiz.answers.answer_b,
        },
        {
          id: 3,
          quest: quiz.answers.answer_c,
        },
        {
          id: 4,
          quest: quiz.answers.answer_d,
        },
        {
          id: 5,
          quest: quiz.answers.answer_e,
        },
        {
          id: 6,
          quest: quiz.answers.answer_f,
        },
      ].filter(answer => answer.quest !== null),
      correct_answers: quiz.correct_answers,
      multiple_correct_answers: quiz.multiple_correct_answers,
      category: quiz.category,

    }
  });



  const quiz = newQuiz;

  return { props: { quiz } };
};

export default Quiz;