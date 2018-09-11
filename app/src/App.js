import React, { Component } from 'react';
import { css } from 'emotion';

import PtsCanvas from './PtsCanvas'

const appStyle = css`
  display: flex;
  position: relative;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .text {
    position: absolute;
    width: 100%;
    text-align: center;
    pointer-events: none;
  }

  .bg {
    position: absolute;
    width: inherit;
    height: inherit;
  }
`;

class App extends Component {
  render() {
    return (
      <div className={appStyle}>
        <PtsCanvas name="bg"/>
        <div className="text">
          <h1>Hello,</h1>
          <h1>I'm Diogo Eiji Suguimoto =]</h1>
        </div>
      </div>
    );
  }
}

export default App;
