import React, {useState}from 'react'

import axios from 'axios'

import NewsHeader from './NewsHeader'
import Results from './Results'
import Search from './Search'


const NewsPage = () => {
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
        url: 'http://localhost:8000/job-data/',
        data: {
          search: tempsearch
        }
      })
        .then(({data}) => {
            let results = data.articles
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
          <NewsHeader/>
          <Search handleInput={handleInput} search={api_request}/>
          <Results results={state.results} />
      </div>
  
  )
}

export default NewsPage