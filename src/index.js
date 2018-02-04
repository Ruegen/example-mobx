import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appState from './appState'

ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
registerServiceWorker();
