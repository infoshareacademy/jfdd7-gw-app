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

const BasicExample = () => (
  <Router>
    <div>
      <MainMenu/>

      <hr/>

      <Route exact path="/" component={FirstPage}/>
      <Route path="/add-category" component={AddCategory}/>
    </div>
  </Router>
)
export default BasicExample