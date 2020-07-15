import React from 'react'
import { css } from '@emotion/core'

const quoteCss = css`
  width: 75%;
  margin-left: 140px;
  margin-top: 150px;
  margin-bottom: 50px;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  font-size: 2.4em;
  font-family: 'Heebo', sans-serif;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2em;
  }
  @media (max-width: 525px) {
    font-size: 1.6em;
  }
  @media (max-width: 470px) {
    font-size: 1.3em;
  }
  @media (max-width: 410px) {
    font-size: 0.8em;
  }
`
const authorCss = css`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`

export default function TechQuotes() {
  const quote = [
    ['When Somthing is important enough, you do it even if the odds are not in your favor', 'Elon Musk'],
    ['Failure is an option here. If things are not failing, you are not innovating', 'Elon Musk'],
    ['I would like to die on Mars - just not on impact', 'Elon Musk'],
    ["Success is a lousy teacher. It seduces smart people into thinking they can't lose.", 'Bill Gates'],
    ['Surround yourself with people who challenge you, teach you, and push you to be your best self.', 'Bill Gates'],
    ['Embrace bad news to learn where you need the most improvement.', 'Bill Gates'],
    ['Have the courage to follow your heart and intuition.', 'Steve Jobs'],
    ["We're here to put a dent in the universe. Otherwise why else even be here?", 'Steve Jobs'],
    ["let's go invent tomorrow rather than worrying about what happened yesterday.", 'Steve Jobs'],
    ['Work hard, have fun, make history.', 'Jeff Bezos'],
    ["If you can't tolerate critics, don't do anything new or interesting.", 'Jeff Bezos'],
    [
      "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying",
      'Jeff Bezos',
    ],
  ]

  const randomQuote = quote[Math.floor(Math.random() * quote.length)]

  return (
    <div css={quoteCss}>
      &quot;{randomQuote[0]}&quot;
      <div css={authorCss}>-{randomQuote[1]}</div>
    </div>
  )
}
