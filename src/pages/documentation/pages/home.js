import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="full-height">
        <h2>Creating a Bot</h2>
        <p>
          <pre>npm i -g create-viav-app</pre>
        </p>
        <p>
          <pre>
            create-viav-app
          </pre>
          These are the options you should see:
          <pre>
            Name:<br />
            Client ID:<br />
            Client Secret:<br />
            Bot Token:
          </pre>
        </p>
      </div>
    )
  }
}

export default App
