import React from 'react'
import { css } from '@emotion/core'

const logoWrapperCss = css`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const logoImageContainerCss = css`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

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
