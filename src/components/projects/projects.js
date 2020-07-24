import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BookmarkBanner from '../bookmark-banner/bookmarkBanner'
import Project from './project'
import TechQuotes from '../tech-quotes/techQuotes'
import Footer from '../footer/footer'
import codeWarsLogo from '../../../static/assets/codewars.png'
import connectFourLogo from '../../../static/assets/connectfour.jpg'
import costcoLogo from '../../../static/assets/costcologo.jpg'
import dinerLogo from '../../../static/assets/diner.jpg'
import folderLogo from '../../../static/assets/folder.jpg'
import hammerLogo from '../../../static/assets/hammer.jpg'
import sudokuLogo from '../../../static/assets/sudokulogo.jpg'
import fOneLogo from '../../../static/assets/f1logo.png'
import glassdoorLogo from '../../../static/assets/glassdoorlogo.jpg'

const projectPageWrapperCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-image: linear-gradient(to right, black, grey);
  // background-image: url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  // background-image: url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
  // background-repeat: repeat-y;
  // background-position: center;
  // background-size: contain;
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
          projectImage={codeWarsLogo}
          projectDescription="Various challenges/Kata from the codewars.com website written in JavaScript. Demonstrating a knowledge of manipulating data types and writing practical and efficient functions."
        />
        <Project
          herokuLink="https://jel-sudoku.herokuapp.com/"
          gitHubLinkFront="https://github.com/jelarson/sudoku"
          gitHubLinkBack="N"
          projectTitle="Sudoku"
          projectImage={sudokuLogo}
          projectDescription="My version of a sudoku puzzle. Built in React. Utilizes emotions library and the Dynamic-React-Timer. Errors, correct answers, and whether the number is currently selected will change the element styles."
        />
        <Project
          herokuLink="https://jel-connect-four.herokuapp.com/"
          gitHubLinkFront="https://github.com/jelarson/connect-four"
          gitHubLinkBack="https://github.com/jelarson/connect-four-high-scores"
          projectTitle="Connect Four"
          projectImage={connectFourLogo}
          projectDescription="A recreation of the classic game, Connect Four. React front-end that demonstrates a knowledge of context to keep track of a player's turn. A Flask database holds the highscores for the players. Can be played against another player or the computer - which randomizes its turn."
        />
        <Project
          herokuLink="https://jel-f1driver-cards.herokuapp.com/"
          gitHubLinkFront="https://github.com/jelarson/material-ui"
          gitHubLinkBack="N"
          projectTitle="Material UI - F1 Driver Cards"
          projectImage={fOneLogo}
          projectDescription="A single web page built solely using Material UI's library of premade components. Styles are given to a theme provider to customize the default styles."
        />
        <Project
          herokuLink="N"
          gitHubLinkFront="https://github.com/jelarson/glassdoor-extension"
          gitHubLinkBack="N"
          projectTitle="Glassdoor Extension"
          projectImage={glassdoorLogo}
          projectDescription="A JavaScript extension that when activated will search the dom for all of the job titles on the current page, grabbing all relevant listings and saving them to memory. Automatically moves on to the next page after a random amount of time until there are no more pages."
        />
        <Project
          herokuLink="https://jel-costco-text-adventure.herokuapp.com/"
          gitHubLinkFront="https://github.com/jelarson/text-adventure-front"
          gitHubLinkBack="https://github.com/jelarson/text-adventure-backend"
          projectTitle="Choose Your Adventure Game"
          projectImage={costcoLogo}
          projectDescription="A classic 'Choose Your Own Adventure' game where you make your way through the hostile world of Costco. React front-end that uses props to keep track of a player's stats from one page to the next. Flask back-end that holds the story options and results."
        />
        <Project
          herokuLink="N"
          gitHubLinkFront="https://github.com/jelarson/Diner-Menu---js"
          gitHubLinkBack="N"
          projectTitle="Diner Menu"
          projectImage={dinerLogo}
          projectDescription="A Diner webpage written in pure HTML and SCSS. Breakfast, lunch, and dinner menus are only accessible during certain times of the day. Running receipt total is stored and displayed on checkout."
        />
        <Project
          herokuLink="N"
          gitHubLinkFront="https://github.com/jelarson/react-widgets-2.0"
          gitHubLinkBack="N"
          projectTitle="Widget Webpage"
          projectImage={hammerLogo}
          projectDescription="An interactice webpage that has has various widgets that the user can interact with."
        />
        <Project
          herokuLink="N"
          gitHubLinkFront="https://github.com/jelarson/portfolio-site"
          gitHubLinkBack="N"
          projectTitle="Portfolio"
          projectImage={folderLogo}
          projectDescription="This webpage was built with React and the Emotion Library. Carefully constructed the components to be as versatile as possible to allow for change and additional projects to be added."
        />
      </div>
      <TechQuotes />
      <Footer />
      <BookmarkBanner />
    </div>
  )
}
