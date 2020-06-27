import React, { useState } from 'react'
// import axios from 'axios'
import { css } from '@emotion/core'

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
const bookmarkWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 40px;
`
const blockCss = css`
  background-color: white;
  width: 100px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const triangleWrapperCss = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const triangleLeftCss = css`
  width: 0;
  height: 0;
  border-top: 50px solid white;
  border-right: 50px solid transparent;
`
const triangleRightCss = css`
  width: 0;
  height: 0;
  border-top: 50px solid white;
  border-left: 50px solid transparent;
`
const linksCss = css`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    width: 65px;
    height: 65px;
  }
`

export default function Home(props) {
  return (
    <div css={homeWrapperCss}>
      <div css={homeHeaderCss}>
        <div>Hello From Home Header</div>
      </div>
      <div css={homeContentCss}>Hello From Home Content</div>
      <div css={bookmarkWrapperCss}>
        <div css={blockCss}>
          <div css={linksCss} />
          <div css={linksCss} />
          <div css={linksCss} />
        </div>
        <div css={triangleWrapperCss}>
          <div css={triangleLeftCss} />
          <div css={triangleRightCss} />
        </div>
      </div>
    </div>
  )
}
