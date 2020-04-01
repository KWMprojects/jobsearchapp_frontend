import React, {useState}from 'react'

import axios from 'axios'

import Carousel from './universal/Carousel'
import Results from './jobs/Results'
import Search from './jobs/Search'

const HomePage = () => {
  const [state, setState] = useState({
          title: "",
          state: "",
          results: [],
          selected: {}
        })
      
  const api_request = (e)=> {
    let temptitle = state.title.replace(' ', '%20')
    let tempstate = state.state.replace(' ', '%20')
    if(e.key === "Enter"){
      axios({
        method: 'post',
        url: 'http://localhost:8000/article-data/',
        data: {
          title: temptitle,
          state: tempstate
        }
      })
      .then(({data}) => {
          let results = data.results
          setState(prevState =>{
          return {...prevState, results: results}
          })
      })
      .catch(error =>{
        console.log(error)
      })
    }
  }

  const handleInputTitle = (e) => {
    let search = e.target.value
    setState(prevState => {
      return { ...prevState, title: search}
    })
  }
  
  const handleInputState = (e) => {
    let search = e.target.value
    setState(prevState => {
      return { ...prevState, state: search}
    })
  }

  return(
      <div>
          <Carousel />
          <Search handleInputTitle={handleInputTitle} handleInputState={handleInputState} search={api_request}/>
          <Results results={state.results} />
      </div>
  
  )
}

export default HomePage