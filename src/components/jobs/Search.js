import React from 'react'

import { Col, 
         Row, 
         Form, 
         FormGroup, 
         Label, 
         Input 
} from 'reactstrap'


function Search ({handleInputTitle, handleInputState, search}) {
    return(
        <div className="shadow-lg p-5 m-5 bg-white rounded">
           <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="job-title">Job Title</Label>
                            <Input type="text" name="job-title" placeholder="Job Title" onChange={handleInputTitle} onKeyPress={search}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input type="text" name="state" placeholder="State" onChange={handleInputState} onKeyPress={search}/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>)}

export default Search
