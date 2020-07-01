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
  background-image: linear-gradient(to right, black, grey);
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
  align-items: center;
  justify-content: center;
  font-family: 'Heebo', sans-serif;
  margin-top: 60px;
  margin-left: 140px;
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
`

export default function Home() {
  return (
    <div css={homeWrapperCss}>
      <div css={homeHeaderCss}>
        <div css={headerCss}>Hey There!</div>
      </div>
      <div css={homeContentCss}>
        <ProfileImage />
        <div css={homeMessageCss}>
          My Name is Jess Larson. <br />
          <br /> I'm a Web Developer who has graduated from the Bottega Full-Stack Developer program in May of 2020.
          Feel free to click around the navigation bar to learn more about me and see some of my work!
          <div css={contactInfoCss}>
            <h3>Contact Information</h3>
            <FontAwesomeIcon icon="envelope" /> Email: jesslarson93@gmail.com
            <br />
            <FontAwesomeIcon icon="phone" /> Mobile: 801-360-6273
          </div>
        </div>
      </div>
      <BookmarkBanner />
    </div>
  )
}
