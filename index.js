import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './page/App';
import registerServiceWorker from './page/registerServiceWorker';
import './css/common.css';

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
