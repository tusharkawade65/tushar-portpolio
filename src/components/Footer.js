import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CONSTANT_GIT_URL, CONSTANT_INSTA_URL, CONSTANT_LINKEDIN_URL, CONSTANT_NAME, CONSTANT_TWITTER_URL } from "../constants";



function capitalizeEachWord(inputString) {
  return inputString
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
async function apiCall() {
  const url = 'https://api.api-ninjas.com/v1/counter?id=135214141&hit=true';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'SMRJG/ObZrtO88MCS/HJtQ==894rhQha15jYsJnq',
  };

  const response = await fetch(url, {
    method: 'GET', // You can change this to 'POST' or other HTTP methods
    headers: headers,
  });
  console.log(response);
}

function Footer() {
  useEffect(() => {
    apiCall();

  }, []);

  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">

        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} {capitalizeEachWord(CONSTANT_NAME)}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={CONSTANT_GIT_URL}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={CONSTANT_TWITTER_URL}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={CONSTANT_LINKEDIN_URL}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={CONSTANT_INSTA_URL}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
