import React from 'react'
import { css } from '@emotion/core'

const logoWrapperCss = css`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 545px) {
    font-size: 0.8em;
  }
  @media (max-width: 445px) {
    font-size: 0.6em;
  }
`
const logoImageContainerCss = css`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    height: 120px;
    width: 120px;
  }
  @media (max-width: 680px) {
    height: 80px;
    width: 80px;
  }
  @media (max-width: 515px) {
    height: 55px;
    width: 55px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

export default function LanguageLogo(props) {
  const { languageTitle, logoUrl } = props
  return (
    <div css={logoWrapperCss}>
      <h2>{languageTitle}</h2>
      <div css={logoImageContainerCss}>
        <img src={logoUrl} alt="Language Logo" />
      </div>
    </div>
  )
}
