import React, { Component } from 'react';
import NavBar from './navbar';
import './App.css';
import Viz from './viz';
import SideBar from './sideBar';


class App extends Component {
  
  state = { }

  render() {
    return (
      <main className="vizcontainer">
      <NavBar/>
      <Viz/>
      <SideBar/>
      </main>
    );
  }
}

export default App;
