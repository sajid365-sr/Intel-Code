import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Option from "../Option/Option";
import './Question.css'

let counter = 0;
const Question = ({ questionContainer }) => {

  counter += 1;
  const { question, options } = questionContainer;
  console.log(questionContainer);


  return (
    <div className="question-container">
        <FontAwesomeIcon className="eye" icon={faEye}></FontAwesomeIcon>
      <div className="single-question">
        <p>
          <span className="text-black fs-4">Quiz {counter / 2}:</span> {question}
        </p>
      </div>
      <div className="options">
        {
            options.map(option => <Option 
            singleOption={option}
            ></Option>)
        }
      </div>
    </div>
  );
};

export default Question;
