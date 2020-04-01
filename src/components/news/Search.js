import React from 'react'

import { 
    InputGroup, 
    InputGroupAddon, 
    InputGroupText, 
    Input 
} from 'reactstrap'


function Search ({handleInput, search}) {
    return(
        <div className="shadow-lg p-5 m-5 bg-white rounded">
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Subject</InputGroupText>
                </InputGroupAddon>
                <Input type='text' placeholder="Search the news" onChange={handleInput} onKeyPress={search}/>
            </InputGroup>
        </div>)}

export default Search