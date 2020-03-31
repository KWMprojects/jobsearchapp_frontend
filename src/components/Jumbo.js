import React from 'react';
import { Jumbotron, Row, Col} from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
          <Row>
            <Col xs="6"><h1 className="display-3 text-primary">Saved Jobs</h1><p className="text-primary">Your Future Starts Here!</p></Col>
            <Col xs="6"><img className='img-thumbnail text-right' src='https://cdn.tinybuddha.com/wp-content/uploads/2015/01/Happy-Man-on-the-Beach.jpg' alt='Happy-Guy-On-Beach'></img></Col>
          </Row>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;