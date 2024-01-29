import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { CONSTANT_HOBBIES, CONSTANT_NAME } from "../../constants";


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
            Hi Everyone! I'm <span className="purple">{capitalizeEachWord(CONSTANT_NAME)} </span>,
            a backend enthusiast currently excelling at Encora. With an <span className="purple"> MCA </span> from Pune University.
            Explore this portfolio for a glimpse into my journey, and let's collaborate to code the future together!
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            {CONSTANT_HOBBIES.map((hobbie) => {
              return (
                < li className="about-activity" >
                  <ImPointRight /> {hobbie}
                </li>
              )
            })}

          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
