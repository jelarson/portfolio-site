import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Global, css } from '@emotion/core'

import { UserProvider } from './context/context'
import Home from './home/home'
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
            </Switch>
          </div>
        </Router>
      </UserProvider>
    </div>
  )
}
