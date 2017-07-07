import React, { Component } from 'react'
import MainMenu from './MainMenu'
import Categories from './Categories'
import './App.css'
import FirstPage from "./FirstPage"
import AddTransaction from './AddTransaction'
import AddCategory from "./AddCategory";
import Category from "./Category";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu/>
        <Categories/>
        <FirstPage/>
        <Category/>
        <AddCategory/>
        <AddTransaction/>
      </div>
    );
  }
}

export default App;
