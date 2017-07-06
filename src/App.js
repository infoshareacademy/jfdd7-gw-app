import React, { Component } from 'react'
import MainMenu from './MainMenu'
import Categories from './Categories'
import './App.css'
import FirstPage from "./FirstPage"
import AddTransaction from './AddTransaction'
import AddTransactionButtons from "./AddComponents/AddTransactionButtons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>formularz</div>
        <MainMenu/>
        <Categories/>
        <FirstPage/>
        <AddTransactionButtons/>
      </div>
    );
  }
}

export default App;
