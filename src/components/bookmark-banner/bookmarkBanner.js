import React, { useState } from 'react'
import { css } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BookmarkLink from './bookmarkLink'

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
  padding-top: 30px;
  padding-bottom: 30px;
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

export default function BookmarkBanner() {
  return (
    <div css={bookmarkWrapperCss}>
      <div css={blockCss}>
        <BookmarkLink destination="/" faIcon="home" number="1" name="Home" />
        <BookmarkLink destination="/projects" faIcon="code-branch" number="2" name="Projects" />
        <BookmarkLink destination="/about" faIcon="user-tie" number="3" name="About Me" />
      </div>
      <div css={triangleWrapperCss}>
        <div css={triangleLeftCss} />
        <div css={triangleRightCss} />
      </div>
    </div>
  )
}
