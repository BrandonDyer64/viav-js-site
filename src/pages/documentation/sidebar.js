import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav class="sidebar navbar navbar-dark bg-dark">
        <div className="navbar-brand">
          Documentation
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/documentation/install">Install</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/documentation/plugin">Plugins</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/documentation/command">Commands</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/documentation/events_discord">Discord Events</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/documentation/events_viav">Viav Events</Link>
          </li>
        </ul>

      </nav>
    )
  }
}

export default Navbar
