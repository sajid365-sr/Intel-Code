
import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

export const QuestionContext = createContext([]);

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {name,questions,total,id} = quiz;
 


    return (
        
            <div className='quiz-container'>
            <h2>Quiz of <span className='topic-name'>{name}</span></h2>
            <QuestionContext.Provider value={questions}>
            <div>
                {
                    questions.map(question => <Question 
                    key={question.id}
                    questionContainer={question}
                    allQuestions={questions}
                    ></Question>)
                }
            </div>
            </QuestionContext.Provider>
        </div>
        
    );
};

export default Quiz;