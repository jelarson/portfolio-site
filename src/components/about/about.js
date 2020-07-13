import React from 'react'
import { css } from '@emotion/core'

import BookmarkBanner from '../bookmark-banner/bookmarkBanner'
// import ProfileImage from '../profile-image/profileImage'
import LanguageLogo from './languageLogo'
import TechQuotes from '../tech-quotes/techQuotes'
import Footer from '../footer/footer'

const aboutPageWrapperCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-image: linear-gradient(to right, black, grey);
  // background-image: url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  // background-image: url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
  // background-repeat: repeat-y;
  // background-position: center;
  // background-size: contain;
`

const aboutHeaderCss = css`
  width: calc(100% - 140px);
  height: 60px;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 24px;
  margin-left: 140px;
`
const aboutHeaderTitleCss = css`
  font-family: 'Heebo', sans-serif;
  font-size: 2.4em;
  @media (max-width: 460px) {
    font-size: 2.1em;
  }
  @media (max-width: 300px) {
    font-size: 1.7em;
  }
`

const aboutContentCss = css`
  display: flex;
  flex-direction: column;
  width: calc(100% - 140px);
  margin-left: 140px;
  color: white;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Heebo', sans-serif;
  font-size: 0.87em;
`

const contentSectionWrapperCss = css`
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  font-size: 1.3em;
  flex-direction: column;
  margin-bottom: 15px;
  @media (max-width: 570px) {
    font-size: 1em;
  }
  @media (max-width: 350px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`
const toolboxSectionWrapperCss = css`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 350px) {
    font-size: 0.8em;
  }
`

const languageLogoCss = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  justify-items: center;
  margin-bottom: 15px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 340px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default function About() {
  return (
    <div css={aboutPageWrapperCss}>
      <div css={aboutHeaderCss}>
        <div css={aboutHeaderTitleCss}>About Me</div>
      </div>
      <div css={aboutContentCss}>
        <div css={contentSectionWrapperCss}>
          <h2>Bio:</h2>
          My name is Jess E Larson. In my free time, I enjoy spending time with my beautiful wife and our 8 month old
          daughter. I also enjoy watching and talking about movies, sports, and of course coding. I hold a Bachelor
          degree in Business Management with a minor in Finance. In that field, I didn&apos;t always care for the
          environment. I had a friend who suggested I look into coding, and I have not looked back or had any regrets
          since.
        </div>
        <div css={toolboxSectionWrapperCss}>
          <h2>What&apos;s in my toolbox?</h2>
          <div css={languageLogoCss}>
            <LanguageLogo languageTitle="HTML5" logoUrl="https://i.ya-webdesign.com/images/html-5-logo-png-19.png" />
            <LanguageLogo
              languageTitle="CSS / SCSS"
              logoUrl="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
            />
            <LanguageLogo
              languageTitle="React"
              logoUrl="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            />
            <LanguageLogo
              languageTitle="JavaScript"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            />
            <LanguageLogo
              languageTitle="Python3"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
            />
            <LanguageLogo languageTitle="Git" logoUrl="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" />
            <LanguageLogo
              languageTitle="Heroku"
              logoUrl="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png"
            />
          </div>
          <h1>More coming soon!</h1>
        </div>
      </div>
      {/* <ProfileImage /> */}
      <TechQuotes />
      <Footer />
      <BookmarkBanner />
    </div>
  )
}
