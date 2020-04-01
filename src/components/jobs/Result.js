import React, {useState} from 'react'

import Axios from 'axios'
import {
  Card, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button
} from 'reactstrap'

const Result = ({result}) => {
    
  let title = result.title.replace(/<strong>|<\/strong>/g, '')
  let description =result.description.replace(/<strong>|<\/strong>/g, '')

  const [state] = useState({
      title: title,
      company_name: result.company.display_name,
      area: result.location.area.length < 4 ? result.location.area[2] + ", " + result.location.area[1] : result.location.area[3] + ", " +result.location.area[1],
      description: description,
      url: result.redirect_url,
  })  

  const handleSave = event => {
    event.preventDefault()
    const job = {
        title: `${state.title}`,
        company_name: `${state.company_name}`,
        area: `${state.area}`,
        description: `${state.description}`,
        url: `${state.url}`,
    }
    
    Axios.post(`http://localhost:8000/jobs/`, job)
      .catch(error =>{
          console.log(error)
      })
      console.log("Added to Database")
  }

   
  return (
    <div>
      <Card className="shadow p-3 mb-5 bg-white rounded">
        <CardBody>
          <CardTitle><a href={state.url} target="_blank" rel="noopener noreferrer" style={{fontWeight: 'bold'}}>
            {state.title} at {state.company_name}
            </a></CardTitle>
          <CardSubtitle>{state.area}</CardSubtitle>
          <CardText>{state.description}</CardText>
          <Button color="primary" size="sm"onClick={handleSave}>Save</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Result