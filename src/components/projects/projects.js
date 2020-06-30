import React from 'react'
import { css } from '@emotion/core'

import BookmarkBanner from '../bookmark-banner/bookmarkBanner'

const projectPageWrapperCss = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right, black, grey);
`

const projectsHeaderCss = css`
  width: calc(100% - 140px);
  height: 60px;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 24px;
  margin-left: 140px;
`
const projectsHeaderTitleCss = css`
  font-family: 'Heebo', sans-serif;
  font-size: 2.4em;
`

export default function Projects() {
  return (
    <div css={projectPageWrapperCss}>
      <div css={projectsHeaderCss}>
        <div css={projectsHeaderTitleCss}>Projects</div>
      </div>
      <BookmarkBanner />
    </div>
  )
}
