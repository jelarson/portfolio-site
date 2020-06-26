import React, { useState } from 'react'
// import axios from 'axios'
import { css } from '@emotion/core'

const homeWrapperCss = css`
  width: 100vw;
  height: 100vh;
  // margin: -8px;
  display: flex;
  flex-direction: column;
  /* // justify-content: center; */
  align-items: center;
  background-color: grey;
`
const homeHeaderCss = css`
  width: 100%;
  height: 60px;
  background-color: black;
  color: white;
`

const homeContentCss = css`
  width: 100%;
  height; 100%;
  color: white;
  background-color: grey;
`

export default function Home(props) {
  return (
    <div css={homeWrapperCss}>
      <div css={homeHeaderCss}>Hello From Home Header</div>
      <div css={homeContentCss}>Hello From Home Content</div>
    </div>
  )
}
