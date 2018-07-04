import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css'
import channelsImg from '../auto-channels-transparent.png'
import radioImg from '../radio.png'
import messageImg from '../message.png'
import viavImg from '../logo.png'

class App extends Component {
  render() {
    return (
      <div className="features-page">
        <section className="row vcenter-parent">
          <div className="col-md-7">
            <h3>Plugin Based</h3>
            <p>
              <strong>1</strong> Voice Channel = <strong>Infinite</strong> Voice
              Channels
            </p>
            <p>
              No more servers filled with redundant channels. By adding and
              removing voice channels when needed, Viav will keep track so you
              don&#39;t have to.
            </p>
          </div>
          <div className="col-md-5 channels-img-parent">
            <div className="channels-img" />
          </div>
        </section>
        <section className="row vcenter-parent">
          <div className="col-md-5 viav-multi-img-parent" />
          <div className="col-md-7">
            <h3>Web Dashboard API</h3>
            <p>Play music in multiple voice channels at once.</p>
          </div>
        </section>
        <section className="row vcenter-parent">
          <div className="col-md-7">
            <h3>Automatic Sharding</h3>
            <p>
              With radio stations and infinite queues, Viav will keep you
              jamming all night long. The radio stations (<code>;stations</code>,{' '}
              <code>;radio [station]</code>) are live stations managed by 3rd
              parties. The infinite queue (<code>;play [song]</code>) will keep
              adding songs as they’re played.
            </p>
          </div>
          <div className="col-md-5 radio-img-parent">
            <div className="radio-img" />
          </div>
        </section>
        <section className="row vcenter-parent">
          <div className="col-md-5 message-img-parent">
            <div className="message-img" />
          </div>
          <div className="col-md-7">
            <h3>Temporary Responses</h3>
            <p>
              Anything that Viav says in a text channel is temporary. When you
              give the bot a command the command message is instantly deleted
              and Viav’s response is deleted shortly after it’s posted. No more
              clutter. No more{' '}
              <i>
                <b>#bot-spam</b>
              </i>{' '}
              channels.
            </p>
          </div>
        </section>
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <a
            className="btn btn-primary btn-large"
            href="https://discordapp.com/oauth2/authorize?client_id=446151195338473485&permissions=66321471&scope=bot"
          >
            Add Viav
          </a>
        </section>
      </div>
    )
  }
}

export default App
