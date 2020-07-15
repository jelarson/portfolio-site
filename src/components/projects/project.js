import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const projectWrapperCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 140px);
  margin-left: 140px;
  color: white;
  font-family: 'Heebo', sans-serif;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px white solid;
`
const projectImageCss = css`
  width: 100px;
  height: 100px;
  // background-color: white;
  margin-right: 15px;
  margin-left: 10px;
  // color: black;
  img {
    border-radius: 8px;
    width: 100px;
    height: 100px;
  }
`
const projectContentCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
      color: #a2a2a2;
    }
  }
`
const projectTitleCss = css`
  font-size: 1.4em;
  margin-bottom: 5px;
  text-decoration: underline;
`

const projectDescCss = css`
  margin-bottom: 5px;
`

export default function Project(props) {
  const { herokuLink, gitHubLinkFront, gitHubLinkBack, projectTitle, projectImage, projectDescription } = props
  return (
    <div css={projectWrapperCss}>
      <div css={projectImageCss}>
        <img src={projectImage} alt="Project Logo" />
      </div>
      <div css={projectContentCss}>
        <div css={projectTitleCss}>{projectTitle}</div>
        <div css={projectDescCss}>{projectDescription}</div>
        <br />
        <a href={gitHubLinkFront} rel="noreferrer" target="_blank">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={['fab', 'github']} /> GitHub Front-End Repository
        </a>
        {gitHubLinkBack.length > 1 ? (
          <a href={gitHubLinkBack} rel="noreferrer" target="_blank">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={['fab', 'github']} /> GitHub Back-End Repository
          </a>
        ) : null}
        {/* <br /> */}
        {herokuLink.length > 1 ? (
          <a href={herokuLink} rel="noreferrer" target="_blank">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Heroku Link
          </a>
        ) : null}
      </div>
    </div>
  )
}
