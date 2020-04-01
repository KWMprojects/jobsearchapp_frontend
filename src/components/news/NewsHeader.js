import React from 'react'

import { Jumbotron, Container } from 'reactstrap'

const NewsHeader = () => {
  return (
    <div className="container-full-bg">
      <Jumbotron sm="12" id="jumbo" fluid style={{backgroundImage: "url(https://www.itsmfusa.org/resource/resmgr/images/more_images/news-3.jpg)", backgroundSize: "cover", color: "orange", padding: "15em"}}>
        <Container fluid>
          <h1 className="display-3 font-weight-bold">Get The Latest News!</h1>
          <p className="lead font-italic">Find out what's popular on the job market!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default NewsHeader