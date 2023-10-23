import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <div
        style={{
          padding: "40px",
          backgroundColor: "#777",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", fontWeight: "bold", fontSize: "100px" }}>
          The Generics
        </h1>
      </div>
      <h2>About us</h2>
      <Container>
        <Row>
          <Col>
            <Image
              src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
              roundedCircle
            />
            <p style={{ fontSize: 20, fontStyle: "italic" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
