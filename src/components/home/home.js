import React from 'react'
import { css } from '@emotion/core'

import BookmarkBanner from '../bookmark-banner/bookmarkBanner'

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

  img {
    object-fit: cover;
  object-position: 48% 0;

  width: 150px;
  height: 220px;
  margin-right: 20px;
  }
`
const headerCss = css`
  font-family: 'Heebo', sans-serif;
  font-size: 2.4em;
`

export default function Home() {
  return (
    <div css={homeWrapperCss}>
      <div css={homeHeaderCss}>
        <div css={headerCss}>Hey There!</div>
      </div>
      <div css={homeContentCss}>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHpP7vIiF6fug/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=GwR5UCdI4qblbK0x1zJZSkrG3M96QKuBlRmlVF50Dg0"
          alt="ProfileImage"
        />
        <div>
          My Name is Jess Larson. <br />
          <br /> I'm a Web Developer who has graduated from <br /> the Bottega Full-Stack Developer program in
          <br /> May of 2020. Feel free to click around the
          <br /> navigation bar to learn more about me and see
          <br /> some of my work!
        </div>
      </div>
      <BookmarkBanner />
    </div>
  )
}
