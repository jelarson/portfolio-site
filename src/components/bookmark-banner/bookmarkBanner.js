import React, { useState } from 'react'
import { css } from '@emotion/core'
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

  &:hover {
    width: 65px;
    height: 65px;
    font-size: 1.3em;
  }
`

export default function BookmarkBanner() {
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
          <div css={linksCss} onMouseEnter={() => hoverOn(1)} onMouseLeave={() => hoverOff(1)}>
            <FontAwesomeIcon icon="home" />
          </div>
        </div>
        <div style={{ color: hoverOne ? 'black' : 'white' }}>Home</div>
        <div css={linkDivCss}>
          <div css={linksCss} onMouseEnter={() => hoverOn(2)} onMouseLeave={() => hoverOff(2)}>
            <FontAwesomeIcon icon="code-branch" />
          </div>
        </div>
        <div style={{ color: hoverTwo ? 'black' : 'white' }}>Projects</div>
        <div css={linkDivCss}>
          <div css={linksCss} onMouseEnter={() => hoverOn(3)} onMouseLeave={() => hoverOff(3)}>
            <FontAwesomeIcon icon="user-tie" />
          </div>
        </div>
        <div style={{ color: hoverThree ? 'black' : 'white' }}>About Me</div>
      </div>
      <div css={triangleWrapperCss}>
        <div css={triangleLeftCss} />
        <div css={triangleRightCss} />
      </div>
    </div>
  )
}
