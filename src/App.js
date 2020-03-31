import React from 'react';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage'
import JobListPage from './components/JobListPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/jobs/' component={JobListPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
