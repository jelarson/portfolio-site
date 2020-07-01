import React from 'react'
import { css } from '@emotion/core'

const projectWrapperCss = css`
  display: flex;
  flex-direction: row;
  color: white;
  font-family: 'Heebo', sans-serif;
`
const projectImageCss = css`
  width: 100px;
  height: 100px;
  background-color: white;
`
const projectContentCss = css`
  display: flex;
  flex-direction: column;
`

export default function Project(props) {
  return (
    <div css={projectWrapperCss}>
      <div css={projectImageCss} />
      <div css={projectContentCss}>
        <div>
          <h3>Project Title Placeholder</h3>
        </div>
        Project Description Project Description Project Description Project Description
        <br />
        GitHub link: link Placeholder
        <br />
        Heroku link: link placeholder
      </div>
    </div>
  )
}
