import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { CONSTANT_NAME } from "../../constants";


function capitalizeEachWord(inputString) {
  return inputString
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{capitalizeEachWord(CONSTANT_NAME)} </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I am a Third Year student pursuing B.E.
            in Artificial intelligence & Data Science from Pune University.
            <br />
            Additionally, I am enthusiastic about Machine Learning.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Partying
            </li>
            <li className="about-activity">
              <ImPointRight /> EDM
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
