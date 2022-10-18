import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./Error.css";

const Error = () => {

const feedback = () =>{
    
    toast.success('Report Submitted !!!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

  return (
    <div className="main">
      <div className="content">
        <h1>404</h1>
        <h2>OPPS! PAGE NOT FOUND</h2>
        <p>
          Sorry, the page you are looking for doesn't exist. If you think
          something is wrong, report a problem.
        </p>
        <div className="btn">
          <Link to="/">
            <button>RETURN HOME</button>
          </Link>

          <button onClick={feedback}>REPORT PROBLEM</button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Error;
