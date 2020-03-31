import React from 'react';
import NavBar from './components/universal/Navbar';
import HomePage from './components/HomePage'
import JobListPage from './components/jobs/JobListPage'
import NewsPage from './components/news/NewsPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NewsListPage from './components/news/NewsListPage';

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/jobs/' exact component={JobListPage}/>
        <Route path='/news/' exact component={NewsPage}/>
        <Route path='/newsfeed/' exact component={NewsListPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
