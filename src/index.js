import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import App2 from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App2 />, document.getElementById('root'));
registerServiceWorker();
