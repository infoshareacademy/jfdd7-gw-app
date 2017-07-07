import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MainMenu from './MainMenu'
import AddCategory from './AddCategory'
import FirstPage from './FirstPage'
import Categories from './Categories'
import AddTransaction from './AddTransaction'

import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainMenu/>

        <FirstPage/>


        <Route exact path="/" component={FirstPage}/>
        <Route path="/add-category" component={AddCategory}/>
        <Route path="/categories" component={Categories}/>
        <Route path="/add-transaction" component={AddTransaction}/>
      </div>
    );
  }
}
