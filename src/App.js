import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Origianls'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy Movies' isSmall/>
    </div>
  );
}

export default App;
