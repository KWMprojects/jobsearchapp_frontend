import React, {useState}from 'react';

import Search from './Search'
import axios from 'axios'
import Results from './Results'
import NewsHeader from './NewsHeader'


const NewsPage = () => {
    const [state, setState] = useState({
            search: "",
            results: [],
            selected: {}
          })
        
        
          // let tempsearch = state.search.replace(' ', '%20')
          // let news_api_url_base = `https://newsapi.org/v2/everything?q=${tempsearch}&apiKey=3e4772226fb4485aa8beccbd06c9cff1`
          // const api_request = (e) => {
          //   if(e.key === "Enter"){
          //     axios.get(news_api_url_base).then(({data}) => {
          //       let results = data.articles
          //       setState(prevState =>{
          //         return {...prevState, results: results}
          //       })
          //     })
          //   }
          // }
          
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