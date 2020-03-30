import React, {useState}from 'react';

import Search from './Search'
import axios from 'axios'
import Results from './Results'
import NavBar from  './Navbar'
import Carousel from './Carousel'

const HomePage = () => {
    const [state, setState] = useState({
            search: "",
            results: [],
            selected: {}
          })
        
          const removeHTML = (results) =>{
            let output = {
            title: results.title.replace(/(<([^>]+)>)/ig, ''),
            company_name: results.company.display_name,
            area: results.location.display_name,
            description: results.description.replace(/(<([^>]+)>)/ig, ''),
            ft_pt: results.contract_time.replace("_", ''),
            url: results.redirect_url,
            }
            return output
          }
        
          let job_api_url_base = 'http://api.adzuna.com/v1/api/jobs/us/search/1?content-type=application/json&app_id=76d4045a&app_key=e7338611f49613978defb001ea0fc69c'
          const api_request = (e) => {
            if(e.key === "Enter"){
              axios.get(job_api_url_base + "&what=" + state.search.replace(' ', '%20')).then(({data}) => {
                let results = data.results
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
            <NavBar />
            <Carousel />
            <Search handleInput={handleInput} search={api_request}/>
            <Results results={state.results} />
        </div>
    
    )
}

export default HomePage