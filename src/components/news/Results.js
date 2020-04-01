import React from 'react'

import { Col } from 'reactstrap'

import Result from './Result'

const Results = ({results}) =>{
    return (
        <section>
            {results.map(result => <Col sm="12" md="12" lg={{ size: 6, offset: 3 }} key={result.id}><Result key={result.id} result={result} /></Col>)}
        </section>
    )
}
export default Results