import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BookmarkBanner from '../bookmark-banner/bookmarkBanner'
import ProfileImage from '../profile-image/profileImage'

const homeWrapperCss = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-image: linear-gradient(to right, black, grey);
  background-image: url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
`
const homeHeaderCss = css`
  width: calc(100% - 140px);
  height: 60px;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 24px;
  margin-left: 140px;
`

const homeContentCss = css`
  width: calc(100% - 140px);
  height; 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Heebo', sans-serif;
  margin-top: 60px;
  margin-left: 140px;
`
const welcomeWrapperCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const headerCss = css`
  font-family: 'Heebo', sans-serif;
  font-size: 2.4em;
`

const homeMessageCss = css`
  width: 300px;
`
const contactInfoCss = css`
  color: white;
  font-family: 'Heebo', sans-serif;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
      color: #a2a2a2;
    }
  }
`

export default function Home() {
  return (
    <div css={homeWrapperCss}>
      <div css={homeHeaderCss}>
        <div css={headerCss}>Hey There!</div>
      </div>
      <div css={homeContentCss}>
        <div css={welcomeWrapperCss}>
          <ProfileImage />
          <div css={homeMessageCss}>
            My Name is Jess Larson. <br />
            <br /> I'm a Web Developer who has graduated from the Bottega Full-Stack Developer program in May of 2020.
            Please feel welcome to click around the navigation bar to learn more about me and see some of my work!
          </div>
        </div>
        <h3>Feel free to reach out to me with any opportunities or ideas</h3>
        <div css={contactInfoCss}>
          <FontAwesomeIcon icon="envelope" /> Email: jesslarson93@gmail.com
          <br />
          <FontAwesomeIcon icon="phone" /> Mobile: 801-360-6273
          <br />
          <a href="https://www.linkedin.com/in/jess-e-larson/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            {'  '}Click Here to visit my LinkedIn Profile
          </a>
        </div>
      </div>
      <BookmarkBanner />
    </div>
  )
}
