import React, {Component} from 'react'

import axios from 'axios'
import { Table, Button} from 'reactstrap'

import Jumbo from '../universal/Jumbo'

class JobListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs : [],
        }
    }
    
    componentDidMount() {
        this.getJobs()
        setInterval(this.getJobs, 1000)
    }

    getJobs = () => {
        axios.get(`http://localhost:8000/jobs/`)
            .then(res => {
                this.setState({
                    jobs: res.data
                })
            })
            .catch(error =>{
                console.log(error)
            })
            
    }
    
    handleDelete = event => {
        event.preventDefault()
        const jobID = event.target.value
        axios.delete(`http://localhost:8000/jobs/${jobID}/`)
            .catch(error =>{
                console.log(error)
            })
            console.log("Deleted from Database")
    }
    
    render() {
    return(
        <div>
            <Jumbo/>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Job Title</th>
                        <th>Area</th>
                        <th>Company</th>
                        <th>Delete Job</th>
                    </tr>
                </thead>
                {this.state.jobs.map(job => 
                <tbody key={job.id}>
                        <tr>
                        <th scope="row">{job.id}</th>
                        <td><a href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a></td>
                        <td>{job.area}</td>
                        <td>{job.company_name}</td>
                        <Button color="primary" size="lg" className="float-right align-center" value={job.id} onClick={this.handleDelete}>Delete</Button>
                        </tr>
                </tbody>
                )}
            </Table>
        </div>
    )}
}

export default JobListPage