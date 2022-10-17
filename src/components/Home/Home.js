import React from "react";
import './Home.css';
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Subject from "../Subject/Subject";
import { Container } from "react-bootstrap";


const Home = () => {
  const subjects = useLoaderData().data;
  console.log(subjects);
  return (
    <div>
      <div className="banner">
        <Container>
        <Banner></Banner>
        </Container>
      </div>
      <Container>
      <div className="subject-container">
            {subjects.map((subject) => (
              <Subject key={subject.id} subject={subject}></Subject>
            ))}
      </div>
      </Container>
    </div>
  );
};

export default Home;
