import React from 'react'

import { Container } from 'reactstrap'

import Result from './Result'

const Results = ({results}) =>{
    return (
        <Container>
            {results.map(result => <Result key={result.id} result={result} />)}
        </Container>
    )
}
export default Results