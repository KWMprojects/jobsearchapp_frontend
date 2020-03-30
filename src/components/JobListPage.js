import React, {Component} from 'react';
import { Table, Button} from 'reactstrap';
import NavBar from  './Navbar'
import axios from 'axios'
import Jumbo from './Jumbo'
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
            <Jumbo/>
            <Table hover responsive>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Job Title</th>
                    <th>Area</th>
                    <th>Company</th>
                    </tr>
                    </thead>
                    {this.state.jobs.map(job => 
                    <tbody>
                    <tr key={job.id}>
                    <th scope="row">{job.id}</th>
                    <td>{job.title}</td>
                    <td>{job.area}</td>
                    <td>{job.company_name}</td>
                    <Button className="float-right align-center" value={job.id} onClick={this.handleDelete}>Delete</Button>
                    </tr>
                    </tbody>)}
                </Table>
                </div>
     
    )
}
}


    
{/* <ListGroup>
                {this.state.jobs.map(job => 
                <div>
                    <ListGroupItem className="shadow-sm p-3 mb-5 bg-white rounded"key={job.id}>
                       Job Title: {job.title} | Location: {job.area} | Company: {job.company_name}
                        <Button className="float-right align-center" value={job.id} onClick={this.handleDelete}>Delete</Button>
                    </ListGroupItem></div>)}
            </ListGroup> */}
export default JobListPage