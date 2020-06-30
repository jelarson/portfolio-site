import React, { useState } from 'react'
import { css } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
const linkDivCss = css`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const linksCss = css`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.15s ease-in-out;
  color: white;
  text-align: center;
  outline: none;
  border: none;

  &:hover {
    width: 65px;
    height: 65px;
    font-size: 1.3em;
  }
`

export default function BookmarkBanner(props) {
  const [hoverOne, setHoverOne] = useState(false)
  const [hoverTwo, setHoverTwo] = useState(false)
  const [hoverThree, setHoverThree] = useState(false)

  function hoverOn(num) {
    if (num === 1) {
      setHoverOne(true)
    }
    if (num === 2) {
      setHoverTwo(true)
    }
    if (num === 3) {
      setHoverThree(true)
    }
  }

  function hoverOff(num) {
    if (num === 1) {
      setHoverOne(false)
    }
    if (num === 2) {
      setHoverTwo(false)
    }
    if (num === 3) {
      setHoverThree(false)
    }
  }

  return (
    <div css={bookmarkWrapperCss}>
      <div css={blockCss}>
        <div css={linkDivCss}>
          <NavLink
            css={linksCss}
            type="button"
            exact
            to="/"
            onMouseEnter={() => hoverOn(1)}
            onMouseLeave={() => hoverOff(1)}
            activeStyle={{ color: 'red' }}
          >
            <FontAwesomeIcon icon="home" />
          </NavLink>
        </div>
        <div style={{ color: hoverOne ? 'black' : 'white', fontFamily: "'Heebo', sans-serif" }}>Home</div>
        <div css={linkDivCss}>
          <NavLink
            css={linksCss}
            type="button"
            to="/projects"
            onMouseEnter={() => hoverOn(2)}
            onMouseLeave={() => hoverOff(2)}
            activeStyle={{ color: 'red' }}
          >
            <FontAwesomeIcon icon="code-branch" />
          </NavLink>
        </div>
        <div style={{ color: hoverTwo ? 'black' : 'white', fontFamily: "'Heebo', sans-serif" }}>Projects</div>
        <div css={linkDivCss}>
          <NavLink
            css={linksCss}
            type="button"
            to="/about"
            onMouseEnter={() => hoverOn(3)}
            onMouseLeave={() => hoverOff(3)}
            activeStyle={{ color: 'red' }}
          >
            <FontAwesomeIcon icon="user-tie" />
          </NavLink>
        </div>
        <div style={{ color: hoverThree ? 'black' : 'white', fontFamily: "'Heebo', sans-serif" }}>About Me</div>
      </div>
      <div css={triangleWrapperCss}>
        <div css={triangleLeftCss} />
        <div css={triangleRightCss} />
      </div>
    </div>
  )
}
