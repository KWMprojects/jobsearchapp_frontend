import React, {useState} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Axios from 'axios';

const Result = ({result}) => {
    const [state] = useState({
        title: result.title,
        author: result.author,
        description: result.description,
        image: result.urlToImage,
        url: result.url,
    })  

    const handleSave = event => {
        event.preventDefault()
        const article = {
            title: `${state.title}`,
            author: `${state.author}`,
            description: `${state.description}`,
            image: `${state.image}`,
            url: `${state.url}`,
        }
        console.log(article)
        Axios.post(`http://localhost:8000/news/`, article)
        .then(res => {
            console.log(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
        
    }

   
  return (
    <div>
      <Card className="shadow p-3 mb-5 bg-white rounded">
      <CardImg top width="100%" src={state.image} alt="Card image cap" />
        <CardBody>
          <CardTitle><a href={state.url} target="_blank" rel="noopener noreferrer" style={{fontWeight: 'bold'}}>{state.title}</a></CardTitle>
          <CardSubtitle>by {state.author}</CardSubtitle>
          <hr/>
          <CardText>{state.description}</CardText>
          <Button color="primary" size="sm"onClick={handleSave}>Save</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Result;