import React, {Component} from 'react';
import { Table, Button} from 'reactstrap';
import axios from 'axios'
import NewsHeader from './NewsHeader'
class NewsListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news : [],
        }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8000/news/`)
            .then(res => {
                this.setState({
                    news: res.data
                })
            })
    }
    handleDelete = event => {
        event.preventDefault()
        const article = event.target.value
        const filter = this.state.news.filter(value=>{ return value !== article })
        axios.delete(`http://localhost:8000/news/${article}/`)
            .then(
                this.setState({
                    news: filter
                })
            )
            console.log(this.state.news)
        
    }
    render() {
    return(
        <div>
            <NewsHeader/>
            <Table hover responsive>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Delete Job</th>
                    </tr>
                    </thead>
                    {this.state.news.map(article => 
                    <tbody key={article.id}>
                    <tr>
                    <th scope="row">{article.id}</th>
                    <td><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></td>
                    <td>{article.author}</td>
                    <td>{article.description}</td>
                    <Button color="primary" size="lg" className="float-right align-center" value={article.id} onClick={this.handleDelete}>Delete</Button>
                    </tr>
                    </tbody>
                    )}
                </Table>
                </div>
     
    )
}
}

export default NewsListPage