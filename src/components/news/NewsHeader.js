import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './NewsHeader.css'

const NewsHeader = () => {
  return (
    <div>
      <Jumbotron id="jumbo" fluid>
        <Container fluid>
          <h1 className="display-3 text-right font-weight-bold">Get The Latest News!</h1>
          <p className="lead text-right font-italic">Find out what's popular on the job market!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default NewsHeader;