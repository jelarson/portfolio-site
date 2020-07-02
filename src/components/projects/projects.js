import React from 'react'
import { css } from '@emotion/core'

import BookmarkBanner from '../bookmark-banner/bookmarkBanner'
import Project from './project'

const projectPageWrapperCss = css`
  position: relative;
  width: 100vw;
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

export default function Projects() {
  return (
    <div css={projectPageWrapperCss}>
      <div css={projectsHeaderCss}>
        <div css={projectsHeaderTitleCss}>Projects</div>
      </div>
      <div>
        <Project
          herokuLink="www.google.com"
          gitHubLinkFront="www.github.com"
          gitHubLinkBack="www.github.com"
          projectTitle="Project #1"
          projectImage="https://source.unsplash.com/random"
        />
        <Project
          herokuLink="www.google.com"
          gitHubLinkFront="www.github.com"
          gitHubLinkBack="www.github.com"
          projectTitle="Project #2"
          projectImage="https://source.unsplash.com/random"
        />
        <Project
          herokuLink="www.google.com"
          gitHubLinkFront="www.github.com"
          gitHubLinkBack="www.github.com"
          projectTitle="Project #3"
          projectImage="https://source.unsplash.com/random"
        />
        <Project
          herokuLink="www.google.com"
          gitHubLinkFront="www.github.com"
          gitHubLinkBack="www.github.com"
          projectTitle="Project #4"
          projectImage="https://source.unsplash.com/random"
        />
        <Project
          herokuLink="www.google.com"
          gitHubLinkFront="www.github.com"
          gitHubLinkBack="www.github.com"
          projectTitle="Project #5"
          projectImage="https://source.unsplash.com/random"
        />
        <Project
          herokuLink="www.google.com"
          gitHubLinkFront="www.github.com"
          gitHubLinkBack="www.github.com"
          projectTitle="Project #6"
          projectImage="https://source.unsplash.com/random"
        />
      </div>
      <BookmarkBanner />
    </div>
  )
}
