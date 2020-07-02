import React from 'react'
import { css } from '@emotion/core'

const projectWrapperCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 140px);
  margin-left: 140px;
  color: white;
  font-family: 'Heebo', sans-serif;
  margin-bottom: 25px;
`
const projectImageCss = css`
  width: 100px;
  height: 100px;
  background-color: white;
  margin-right: 15px;
  margin-left: 10px;
  color: black;
`
const projectContentCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export default function Project(props) {
  return (
    <div css={projectWrapperCss}>
      <div css={projectImageCss}>Placeholder Image</div>
      <div css={projectContentCss}>
        <div>Project Title Placeholder</div>
        Project Description Project Description Project Description Project Description
        <br />
        GitHub link: link Placeholder
        <br />
        Heroku link: link placeholder
      </div>
    </div>
  )
}
