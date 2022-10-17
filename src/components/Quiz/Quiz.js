
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {name,questions,total,id} = quiz;
   
    return (
        <div className='quiz-container'>
            <h2>Quiz of <span className='topic-name'>{name}</span></h2>
            <div>
                {
                    questions.map(question => <Question 
                    key={question.id}
                    questionContainer={question}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;