import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Global, css } from '@emotion/core'

import { UserProvider } from './context/context'
import Home from './home/home'
import Projects from './projects/projects'
import About from './about/about'
import Icons from './icons/icons'
import BrandIcons from './icons/brandIcons'
import WoodBG from '../../static/assets/woodbackground.jpg'

export default function App() {
  Icons()
  BrandIcons()

  return (
    <div
      className="app"
      style={{
        width: '100%',
        backgroundImage: `url(${WoodBG})`,
        //         backgroundImage: `url(
        //   'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        // )`,
        backgroundRepeat: 'round',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <UserProvider>
        <Router>
          <Global
            styles={css`
              html {
                margin: 0;
                width: 100%;
              }
              body {
                margin: 0;
                padding: 0;
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
