import React from 'react'
import { css } from '@emotion/core'

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

export default function BookmarkBanner() {
  return (
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
  )
}
