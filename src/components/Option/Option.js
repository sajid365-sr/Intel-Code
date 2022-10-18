import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { QuestionContext } from "../Quiz/Quiz";
import "./Option.css";


const Option = ({ singleOption, qId }) => {

  const questions = useContext(QuestionContext);
  

  const correctAns = (e) => {

    
    let findQ = questions.find((fullQuestion) => fullQuestion.id === qId);
    let ans = findQ.correctAnswer.split(' ').filter(word => word).join(' ');
    const circle = e.target;
    const ansText = circle.parentElement.lastChild.innerText;

    // console.log(findQ, qId, ansText);

    if (ans === ansText) {
      circle.style.backgroundColor = "orange";

      circle.parentElement.style.backgroundColor = "rgb(110, 91, 153)";
      circle.parentElement.lastChild.style.color = "white";

      
      toast.success('Correct answer', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    } else {
      circle.style.backgroundColor = "white";

      circle.parentElement.style.backgroundColor = "rgba(255, 0, 0, 0.644)";
      circle.parentElement.lastChild.style.color = "white";

      toast.error('Wrong answer', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };


  return (
    <div className="option-container">
      <span onClick={correctAns} className="customCircle"></span>
      <ToastContainer
      position="bottom-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
      />

      <p>{singleOption}</p>
      
      
    </div>
  );
};

export default Option;
