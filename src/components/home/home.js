import React from 'react'
import { css } from '@emotion/core'
import { FortAwesomeIcon, FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BookmarkBanner from '../bookmark-banner/bookmarkBanner'

const homeWrapperCss = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  // margin: -8px;
  display: flex;
  flex-direction: column;
  /* // justify-content: center; */
  align-items: center;
  // background-color: grey;
  background-image: linear-gradient(to right, black, grey);
`
const homeHeaderCss = css`
  width: 100%;
  height: 60px;
  // background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 140px;
`

const homeContentCss = css`
  width: 100%;
  height; 100%;
  color: white;
  display: flex;
  // background-color: grey;
  // background-image: linear-gradient(to right, black , grey)
  align-items: center;
  justify-content: center;
  margin-left: 140px;
`

export default function Home() {
  return (
    <div css={homeWrapperCss}>
      <div css={homeHeaderCss}>
        <div>
          Hello From Home Header
          <FontAwesomeIcon icon="home" />
        </div>
      </div>
      <div css={homeContentCss}>Hello From Home Content</div>
      <BookmarkBanner />
    </div>
  )
}
