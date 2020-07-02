import React from 'react'
import { css } from '@emotion/core'

const footerCss = css`
  color: white;
  margin-left: 140px;
  text-align: center;
  margin-bottom: 10px;
`

export default function Footer() {
  return <div css={footerCss}>&copy; 2020 | Jesse</div>
}
