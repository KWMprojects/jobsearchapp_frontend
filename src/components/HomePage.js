import React, {useState}from 'react'

import axios from 'axios'

import Carousel from './universal/Carousel'
import Results from './jobs/Results'
import Search from './jobs/Search'

const HomePage = () => {
  const [state, setState] = useState({
          search: "",
          results: [],
          selected: {}
        })
      
  const api_request = (e)=> {
    let tempsearch = state.search.replace(' ', '%20')
    if(e.key === "Enter"){
      axios({
        method: 'post',
        url: 'http://localhost:8000/article-data/',
        data: {
          search: tempsearch
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

  const handleInput = (e) => {
    let search = e.target.value
    setState(prevState => {
      return { ...prevState, search: search}
    })
  }
  
  return(
      <div>
          <Carousel />
          <Search handleInput={handleInput} search={api_request}/>
          <Results results={state.results} />
      </div>
  
  )
}

export default HomePage