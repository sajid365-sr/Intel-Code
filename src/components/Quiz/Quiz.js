
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData().data;
    console.log(quiz);
    return (
        <div>
            <h2>This is a quiz section</h2>
        </div>
    );
};

export default Quiz;