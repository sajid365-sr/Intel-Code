import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Subject.css";

const Subject = ({ subject }) => {
  return (
    <div className="subject">
      <div className="image">
        <img src={subject.logo} alt="" />
      </div>
      <div className="practiceBtn">
        <p>{subject.name}</p>
        <button>
          Start Practice
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Subject;
