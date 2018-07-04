import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn.discordapp.com/attachments/446202984372895758/463944768574062593/js.png"
              style={{ width: '30px' }}
            />
            &nbsp;Viav.js
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/documentation">
                  Documentation
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://discord.gg/A23ZE7x"
                >
                  Community
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li>
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://www.patreon.com/viav"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://gitlab.com/BrandonDyer64/viav-lib"
                >
                  Repo
                </a>
              </li>
              <li>
                <a className="nav-link" target="_blank" href="https://viav.app">
                  Viav
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
