import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import { Error } from './components/Error';
import { startMatchApp } from './startMatchApp';
import { startRefereeApp } from './startRefereeApp';
import registerServiceWorker from './registerServiceWorker';

// Doing dumb routing there as I'm not working on the backend yet.
if (!window.sessionStorage) {
  ReactDOM.render(
    <Error message='This application requires Web Storage to work. Please use a compatible browser' />,
    document.getElementById('root') as HTMLElement
  );
}
else if (location.pathname === '/referee') {
  startRefereeApp()
}
else {
  startMatchApp()
}

registerServiceWorker();
