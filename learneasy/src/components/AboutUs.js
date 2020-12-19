import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AboutUs = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Pedagogical Learning Aid</h1>
          <p className="lead">
            As per the latest statistics available by the National Institute of Health, over 8% of the general population has some kind of learning disability. Learning disabilities can range across a spectrum depending on the
            severity of the case but can be broadly defined as the difficulty in
            understanding and comprehending information as well as the inability to
            communicate it
          </p>
          <p className="lead">
            With such a large number of people suffering with learning disabilities, it
            is integral to put forth solutions to their daily problems for the purpose of
            educating them effectively.
          </p>
          <p className="lead">
            This project suggests a system that works as a pedagogical or learning aid
            for those with learning disabilities by providing to them an environment
            that enables ease of understanding and communication
          </p>
          <p className="lead">
            With two panels; one for the instructor and other for the student, this
            system will apply the concepts of human computer interaction according
            to each user.
          </p>
          <p className="lead">
            While the instructors will have a simple interface for conducting quizzes
            and evaluating each student, the main challenge comes forth while
            interacting with those with learning disabilities.
          </p>
          <p className="lead">
            Unlike others, they do not find words or hints useful. Therefore, we plan
            to use various pedagogical aids specific to these students and design an
            interface which interacts with them through methods like audio/visual
            feedback, interactive quiz systems, flashcards, smart use of colours and
            other such aids that emphasize on sensory receptors.
          </p>
          <h3 textAlign = "center">Copyrights reserved. Created with love &#9829;</h3>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AboutUs;