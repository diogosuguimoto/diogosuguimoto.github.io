import React, { Fragment } from 'react'
import { css, keyframes, Global } from "@emotion/core"
import { ReactComponent as Github } from '../images/github.svg'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Facebook } from '../images/facebook.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const gradient = keyframes`
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
`

const sectionStyles = css`
  display: flex;
  height: 100vh;
  flex: 1;
  background: linear-gradient(-45deg, #AD3CE7, #EE7752, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  align-items: center;
  justify-content: center;
  animation: ${gradient} 15s ease infinite;
`

const styles = css`
  padding: 60px 30px;
  background-color: white;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.4);
  border-radius: 5px;
  z-index: 10;
  text-align: center;

  p {
    font-size: 1.5em;
    margin-bottom: 30px;
  }
`

const footerStyles = css`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  a {
    margin: 0 15px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`

export default () =>
  <Fragment>
    <Global styles={globalStyles} />
    <section css={sectionStyles}>
      <div css={styles}>
        <p>Hi! I'm <strong>Diogo Eiji Suguimoto</strong>, passionate about coding and marine life</p>
        <p>Living in Rio de Janeiro, Brazil</p>
        <div css={footerStyles}>
          <a title="Github" href="https://github.com/diogosuguimoto">
            <Github />
          </a>
          <a title="Facebook" href="https://facebook.com/diogoeiji">
            <Facebook />
          </a>
          <a title="Twitter" href="https://twitter.com/EijiDiogo">
            <Twitter />
          </a>
          <a title="Linkedin" href="https://www.linkedin.com/in/diogoeiji">
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  </Fragment>
