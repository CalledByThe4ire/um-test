import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalFonts from './assets/fonts';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
