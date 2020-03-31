import React, {Component} from 'react';
import { Table, Button} from 'reactstrap';
import axios from 'axios'
import Jumbo from '../universal/Jumbo'
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
        const jobID = event.target.value
        // this.setState(state => {
        //     const newjobs = state.jobs.filter(item => item.id !== jobID)
        //     console.log('this happened')
        //     return {jobs: newjobs}
        // })
        // console.log(this.state.jobs)
        axios.delete(`http://localhost:8000/jobs/${jobID}/`)
            .then(console.log(`Job with job id of ${jobID} was deleted`))
            .then(this.forceUpdate())
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
                    <td>{job.title}</td>
                    <td>{job.area}</td>
                    <td>{job.company_name}</td>
                    <Button color="primary" size="lg" className="float-right align-center" value={job.id} onClick={this.handleDelete}>Delete</Button>
                    </tr>
                    </tbody>
                    )}
                </Table>
                </div>
     
    )
}
}

export default JobListPage