import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Subject.css";

const Subject = ({ subject }) => {
  const {logo,name,id} = subject;
  return (
    <div className="subject">
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <div className="practiceBtn">
        <p>{name}</p>
        <Link to={`/quiz/${id}`}>
        <button>
          Start Practice
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Subject;
