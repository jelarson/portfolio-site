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
    width: 100px;
    height: 100px;
  }
`
const projectContentCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
      color: #a2a2a2;
    }
  }
`

export default function Project(props) {
  return (
    <div css={projectWrapperCss}>
      <div css={projectImageCss}>
        <img src={props.projectImage} />
      </div>
      <div css={projectContentCss}>
        <div>{props.projectTitle}</div>
        Project Description Project Description Project Description Project Description
        <br />
        <a href={props.gitHubLinkFront}>
          <FontAwesomeIcon icon={['fab', 'github']} /> GitHub Front-End Repository
        </a>
        {props.gitHubLinkBack.length > 1 ? (
          <a href={props.gitHubLinkBack}>
            <FontAwesomeIcon icon={['fab', 'github']} />
            GitHub Back-End Repository
          </a>
        ) : null}
        {/* <br /> */}
        {props.herokuLink.length > 1 ? <a href={props.herokuLink}>Heroku Link</a> : null}
      </div>
    </div>
  )
}
