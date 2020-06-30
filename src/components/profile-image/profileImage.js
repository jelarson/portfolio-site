import React from 'react'
import { css } from '@emotion/core'

const profileImageCss = css`
  object-fit: cover;
  object-position: 48% 0;

  width: 150px;
  height: 220px;
  margin-right: 60px;
`

export default function ProfileImage() {
  return (
    <img
      css={profileImageCss}
      src="https://media-exp1.licdn.com/dms/image/C4E03AQHpP7vIiF6fug/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=GwR5UCdI4qblbK0x1zJZSkrG3M96QKuBlRmlVF50Dg0"
      alt="ProfileImage"
    />
  )
}
