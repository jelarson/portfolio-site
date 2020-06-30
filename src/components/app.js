import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Global, css } from '@emotion/core'

import { UserProvider } from './context/context'
import Home from './home/home'
import Projects from './projects/projects'
import About from './about/about'
import Icons from './icons/icons'

export default function App() {
  Icons()

  return (
    <div className="app">
      <UserProvider>
        <Router>
          <Global
            styles={css`
              body {
                margin: 0;
              }
            `}
          />
          <div className="app-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </div>
        </Router>
      </UserProvider>
    </div>
  )
}
