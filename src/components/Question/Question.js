import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Option from "../Option/Option";
import './Question.css'

let counter = 0;
const Question = ({ questionContainer}) => {

  counter += 1;
  const { question, options,id,correctAnswer } = questionContainer;

  const ansDetails = () =>{
    
    toast.info(`Correct answer is : ${correctAnswer}`, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      
  }

  return (
    <div className="question-container">
        <FontAwesomeIcon onClick={ansDetails} className="eye" icon={faEye}></FontAwesomeIcon>
        <ToastContainer />
      <div className="single-question">
        <p>
          <span className="text-black fs-4">Quiz {counter / 2}:</span> {question}
        </p>
      </div>
      <div className="options">
        {
            options.map(option => <Option 
                key={option}
            singleOption={option}
            qId={id}
            ></Option>)
        }
      </div>
    </div>
  );
};

export default Question;
