import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import DarkModeProvider from './context/darkmode/DarkModeProvider';
import {BrowserRouter as Router} from 'react-router-dom';
import UserProvider from './context/user/UserProvider';
import './assets/icons/iconLibrary';
import {localStorageKey} from './config/branding';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    {/* <Router basename="/f1"> */}
      <DarkModeProvider localStorageKey={localStorageKey}>
        <UserProvider>
          <App />
        </UserProvider>
      </DarkModeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
