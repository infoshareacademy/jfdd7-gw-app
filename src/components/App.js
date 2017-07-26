/**
 * Created by arturwojciechowski on 07.07.17.
 */
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
import Transaction from './Transaction'
import Transactions from './Transactions'
import Stats from './Stats'
import Calendar from './Calendar'
import StatsApplePieView from './StatsApplePieView'
import LoginPage from './LoginPage'
import AddTansaction1 from './AddTransaction1'
import '../App.css'

const App = () => (
  <Router>
    <div>
      <MainMenu/>

      <hr/>

      <Route exact path="/" component={FirstPage}/>
      <Route path="/add-category" component={AddCategory}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/add-transaction" component={AddTransaction}/>
      <Route path="/add-transaction1" component={AddTansaction1}/>
      <Route path="/transaction/:transactionId" component={Transaction}/>
      <Route exact path="/transactions" component={Transactions}/>
      <Route exact path="/stats" component={Stats}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/statsApplePieView" component={StatsApplePieView}/>

    </div>
  </Router>
)
export default App