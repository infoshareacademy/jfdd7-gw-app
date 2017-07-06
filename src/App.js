import React, { Component } from 'react'
import MainMenu from './MainMenu'
import Categories from './Categories'
import './App.css'
import FirstPage from "./FirstPage"
import AddTransaction from './AddTransaction'



class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu/>
        <Categories/>
        <FirstPage/>
        <AddTransaction/>
      </div>
    );
  }
}

export default App;
