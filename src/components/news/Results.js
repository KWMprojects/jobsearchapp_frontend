import React from 'react'
import Result from './Result'
import { Col } from 'reactstrap';

const Results = ({results}) =>{
    return (
        <section className="results">
            {results.map(result => <Col sm="12" md={{ size: 6, offset: 3 }}><Result key={result.id} result={result} /></Col>)}
        </section>
    )
}
export default Results