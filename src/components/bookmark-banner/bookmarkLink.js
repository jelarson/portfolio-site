import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

export default function BookmarkLink(props) {
  const [hoverOne, setHoverOne] = useState(false)
  const [hoverTwo, setHoverTwo] = useState(false)
  const [hoverThree, setHoverThree] = useState(false)
  const [hoverNumber, setHoverNumber] = useState(false)

  const { destination, faIcon, number, name } = props

  useEffect(() => {
    if (number === '1') {
      setHoverNumber(hoverOne)
    }
    if (number === '2') {
      setHoverNumber(hoverTwo)
    }
    if (number === '3') {
      setHoverNumber(hoverThree)
    }
  }, [number])

  function hoverOn(num) {
    if (num === '1') {
      setHoverOne(true)
    }
    if (num === '2') {
      setHoverTwo(true)
    }
    if (num === '3') {
      setHoverThree(true)
    }
  }

  function hoverOff(num) {
    if (num === '1') {
      setHoverOne(false)
    }
    if (num === '2') {
      setHoverTwo(false)
    }
    if (num === '3') {
      setHoverThree(false)
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div css={linkDivCss}>
        <NavLink
          css={linksCss}
          exact
          to={destination}
          onMouseEnter={() => hoverOn(number)}
          onMouseLeave={() => hoverOff(number)}
          activeStyle={{ color: 'red' }}
        >
          <FontAwesomeIcon icon={faIcon} />
        </NavLink>
      </div>
      <div style={{ visibility: hoverNumber ? 'visible' : 'hidden', fontFamily: "'Heebo', sans-serif" }}>{name}</div>
    </div>
  )
}
