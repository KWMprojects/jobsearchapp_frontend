import React from 'react'
import Result from './Result'
import { Col , Row} from 'reactstrap';

const Results = ({results}) =>{
    return (
        <Row>
            {results.map(result => <Col sm="12" md={{ size: 6, offset: 3 }}><Result key={result.id} result={result} /></Col>)}
        </Row>
    )
}
export default Results