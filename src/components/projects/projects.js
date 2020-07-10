import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BookmarkBanner from '../bookmark-banner/bookmarkBanner'
import Project from './project'
import TechQuotes from '../tech-quotes/techQuotes'
import Footer from '../footer/footer'

const projectPageWrapperCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-image: linear-gradient(to right, black, grey);
  background-image: url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  background-repeat: repeat-y;
  background-position: center;
  background-size: contain;
`

const projectsHeaderCss = css`
  width: calc(100% - 140px);
  height: 60px;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 24px;
  margin-left: 140px;
`
const projectsHeaderTitleCss = css`
  font-family: 'Heebo', sans-serif;
  font-size: 2.4em;
`

const projectLinkCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 140px;
  margin-bottom: 20px;
  width: calc(100% - 140px);

  a {
    border-radius: 8px;
    color: white;
    text-decoration: none;
    font-size: 1.3em;
    padding: 5px;
    background-color: black;

    &:hover {
      color: red;
    }
  }
`

export default function Projects() {
  return (
    <div css={projectPageWrapperCss}>
      <div css={projectsHeaderCss}>
        <div css={projectsHeaderTitleCss}>Projects</div>
      </div>
      <div css={projectLinkCss}>
        <a href="https://github.com/jelarson" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'github']} />
          Visit my GitHub Profile
        </a>
      </div>
      <div>
        <Project
          herokuLink="N"
          gitHubLinkFront="https://github.com/jelarson/Code-War-Challenges"
          gitHubLinkBack="N"
          projectTitle="Code War Challenges"
          projectImage="https://shankxwebdev.com/wp-content/uploads/2016/03/Screen-Shot-2016-03-28-at-7.51.42-AM.png"
          projectDescription="Various challenges/Kata from the codewars.com website written in JavaScript. Demonstrating a knowledge of manipulating data types and writing practical and efficient functions."
        />
        <Project
          herokuLink="https://jel-connect-four.herokuapp.com/"
          gitHubLinkFront="https://github.com/jelarson/connect-four"
          gitHubLinkBack="https://github.com/jelarson/connect-four-high-scores"
          projectTitle="Connect Four"
          projectImage="https://www.logolynx.com/images/logolynx/eb/eb2e7f908cf6e0d06eda647651ec8eb8.jpeg"
          projectDescription="A recreation of the classic game, Connect Four. React front-end that demonstrates a knowledge of context to keep track of a player's turn. A Flask database holds the highscores for the players. Can be played against another player or the computer - which randomizes its turn."
        />
        <Project
          herokuLink="https://jel-costco-text-adventure.herokuapp.com/"
          gitHubLinkFront="https://github.com/jelarson/text-adventure-front"
          gitHubLinkBack="https://github.com/jelarson/text-adventure-backend"
          projectTitle="Choose Your Adventure Game"
          projectImage="https://helpguide.co/wp-content/uploads/2017/06/Costco-Logo.jpg"
          projectDescription="A classic 'Choose Your Own Adventure' game where you make your way through the hostile world of Costco. React front-end that uses props to keep track of a player's stats from one page to the next. Flask back-end that holds the story options and results."
        />
        <Project
          herokuLink="N"
          gitHubLinkFront="https://github.com/jelarson/Diner-Menu---js"
          gitHubLinkBack="N"
          projectTitle="Diner Menu"
          projectImage="https://res.cloudinary.com/tf-lab/image/upload/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant/0201b3ad-49ef-488d-ba52-d91ddf30b0c0/14e96376-9b49-43c9-94ca-c276a802c33d.jpg"
          projectDescription="A Diner webpage written in pure HTML and SCSS. Breakfast, lunch, and dinner menus are only accessible during certain times of the day. Running receipt total is stored and displayed on checkout."
        />
        <Project
          herokuLink="N"
          gitHubLinkFront="https://github.com/jelarson/react-widgets-2.0"
          gitHubLinkBack="N"
          projectTitle="Widget Webpage"
          projectImage="https://i.pinimg.com/originals/2c/8a/c0/2c8ac0d3152f3ab93a8e124fe9409953.jpg"
          projectDescription="An interactice webpage that has has various widgets that the user can interact with."
        />
        <Project
          herokuLink="N"
          gitHubLinkFront="https://github.com/jelarson/portfolio-site"
          gitHubLinkBack="N"
          projectTitle="Portfolio"
          projectImage="https://static.thenounproject.com/png/140738-200.png"
          projectDescription="This webpage was built with React and the Emotion Library. Carefully constructed the components to be as versatile as possible to allow for change and additional projects to be added."
        />
      </div>
      <TechQuotes />
      <Footer />
      <BookmarkBanner />
    </div>
  )
}
