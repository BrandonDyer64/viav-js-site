import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="full-height">
        <h3>Install</h3>
        <p>
          <pre>npm install --save viav.js</pre>
        </p>
      </div>
    )
  }
}

export default App
