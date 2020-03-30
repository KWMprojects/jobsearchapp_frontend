import React, {Component} from 'react';
// import Button from 'reactstrap'
import NavBar from  './Navbar'
import axios from 'axios'

class JobListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs : [],
        }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8000/jobs/`)
            .then(res => {
                this.setState({
                    jobs: res.data
                })
            })
    }
    handleDelete = event => {
        event.preventDefault()
        axios.delete(`http://localhost:8000/jobs/${event.target.value}/`)
        axios.get(`http://localhost:8000/jobs/`)
        .then(res => {
            this.setState({
                jobs: res.data
            })
        })
    
    }
    render() {
    return(
        <div>
            <NavBar/>
            <ul>{this.state.jobs.map(job => <li key={job.id}>{job.title}<button value={job.id} onClick={this.handleDelete}>Delete</button></li>)}</ul>
        </div>
    )
}
}


export default JobListPage