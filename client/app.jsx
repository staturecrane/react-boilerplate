import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from './components/main.jsx'
import Home from './components/home.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={Home} />>
    </Route>
  </Router>
), document.getElementById('container'))

