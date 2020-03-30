import React, {useState} from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Axios from 'axios';

const Result = ({result}) => {
    let title = result.title.replace(/<strong>|<\/strong>/g, '')
    let description =result.description.replace(/<strong>|<\/strong>/g, '')
    const [state, setState] = useState({
        title: title,
        company_name: result.company.display_name,
        area: result.location.display_name,
        description: description,
        url: result.redirect_url,
    })  

    // const imgSrc = () =>{
    //     const company = state.company_name.replace(" ", "")
    //     return "//logo.clearbit.com/"+ company +".com"
     
    // }
    const handleSave = event => {
        event.preventDefault()
        const job = {
            title: `${state.title}`,
            company_name: `${state.company_name}`,
            area: `${state.area}`,
            description: `${state.description}`,
            url: `${state.url}`,
        }
        console.log(job)
        Axios.post(`http://localhost:8000/jobs/`, job)
        .then(res => {
            console.log(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
        
    }

   
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle><a href='#' onClick={()=> window.open(`${state.url}`, '_blank')}>{state.title} at {state.company_name}</a></CardTitle>
          <CardSubtitle>{state.area}</CardSubtitle>
          <CardText>{state.description}</CardText>
          <Button onClick={handleSave}>Save</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Result;