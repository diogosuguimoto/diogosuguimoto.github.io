import React, { Fragment } from 'react'
import Helmet from "react-helmet"
import { css, keyframes, Global } from "@emotion/core"

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
  display: flex;
  width: 65%;
  height: 65%;
  background-color: white;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.4);
  border-radius: 5px;
  z-index: 10;
  align-items: center;

  p {
    margin: 0 auto;
    font-size: 1.5em;
    margin-bottom: 30px;
  }
`

export default () =>
  <Fragment>
    <Global styles={globalStyles} />
    <Helmet>
      <meta name="google-site-verification" content="F57X00jezeBSi2u7xriTfe49OBHS_bTrInElpUAw5zk" />
    </Helmet>
    <section css={sectionStyles}>
      <div css={styles}>
        <p><strong>Em construção...</strong></p>
      </div>
    </section>
  </Fragment>
