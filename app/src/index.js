import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  * {
    font-family: 'Roboto Slab';  
  }

  body, #root {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
