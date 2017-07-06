import React, { Component } from 'react'
import MainMenu from './MainMenu'
import Categories from './Categories'
import './App.css'
import FirstPage from "./FirstPage"
import AddTransaction from './AddTransaction'
import AddTransactionButtons from "./AddComponents/AddTransactionButtons"
import AddTransactionForm from './AddComponents/AddTransactionForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu/>
        <Categories/>
        <FirstPage/>
        <AddTransactionForm/>
        <AddTransactionButtons/>
      </div>
    );
  }
}

export default App;
