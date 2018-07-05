import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './sidebar'

import './sidebar.css'

import Home from './pages/home'
import Plugin from './pages/plugin'
import NotFound from '../notFound'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="sidebar-container">
          <Sidebar />
          <div className="sidebar-content">
            <Switch>
              <Route exact path="/documentation" component={Home} />
              <Route exact path="/documentation/install" component={Home} />
              <Route path="/documentation/plugin" component={Plugin} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
