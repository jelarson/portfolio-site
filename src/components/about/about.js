import React from 'react'
import { css } from '@emotion/core'

import BookmarkBanner from '../bookmark-banner/bookmarkBanner'
import ProfileImage from '../profile-image/profileImage'

const aboutPageWrapperCss = css`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right, black, grey);
`

const aboutHeaderCss = css`
  width: calc(100% - 140px);
  height: 60px;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 24px;
  margin-left: 140px;
`
const aboutHeaderTitleCss = css`
  font-family: 'Heebo', sans-serif;
  font-size: 2.4em;
`

const aboutContentCss = css`
  display: flex;
  flex-direction: column;
  width: calc(100% - 140px);
  margin-left: 140px;
  color: white;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Heebo', sans-serif;
  font-size: 0.9em;
`

const contentSectionWrapperCss = css`
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export default function About() {
  return (
    <div css={aboutPageWrapperCss}>
      <div css={aboutHeaderCss}>
        <div css={aboutHeaderTitleCss}>About Me</div>
      </div>
      <div css={aboutContentCss}>
        <div css={contentSectionWrapperCss}>
          <h3>Bio:</h3>
          My name is Jess E Larson. In my free time, I enjoy spending time with my beautiful wife and out 8 month old
          daughter. I also enjoy watching and talking about movies, sports, and of course coding.
        </div>
        <div css={contentSectionWrapperCss}>
          <h3>Coding Languages:</h3>I have experience with the following coding languages:
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>HTML5</li>
            <li>CSS/SCSS</li>
          </ul>
        </div>
        <div css={contentSectionWrapperCss}>
          <h3>Education:</h3>
          <ul>
            <li>
              Bottega - Full-Stack Developer Program <br /> February 2020 - May 2020
            </li>
            <li>
              Utah Valley University - Bachelor Degree in Business Management, minor in Finance <br /> September 2015 -
              December 2018
            </li>
            <li>
              {' '}
              Snow College - Associate Degree in Science <br /> September 2014 - May 2015
            </li>
          </ul>
        </div>
      </div>
      <ProfileImage />
      <BookmarkBanner />
    </div>
  )
}
