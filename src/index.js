import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/css/globals.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
    <React.StrictMode >
    <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();