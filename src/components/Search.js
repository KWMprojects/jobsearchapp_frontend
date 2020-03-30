import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


function Search ({handleInput, search}) {
    return(
        <div className="shadow-lg p-5 m-5 bg-white rounded">
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Title</InputGroupText>
            </InputGroupAddon>
            <Input type='text' placeholder="Search for a job" onChange={handleInput} onKeyPress={search}/>
        </InputGroup>
        </div>)}
//         <div>
//         <Form>
//             <FormGroup>
//                 <Label>Title</Label>
//                 <Input type="text" placeholder="Search for a job" onChange={handleInput} onKeyPress={search}/>
//             </FormGroup>
//         </Form>
//         </div>
//   );
// }

//         <section className="searchbox-wrap">
//             <input 
//             type="text" 
//             placeholder="Search for a job" 
//             className="searchbox"
//             onChange={handleInput}
//             onKeyPress={search}
//             />
//         </section>
//     )
// }

export default Search