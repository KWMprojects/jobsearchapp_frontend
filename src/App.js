import React, {useState} from 'react';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage'
import JobListPage from './components/JobListPage'
// import Search from './components/Search'

function App() {
  
  return (
    <div className="App">
      <HomePage />
      <JobListPage/>
    </div>
  );
}

export default App;
