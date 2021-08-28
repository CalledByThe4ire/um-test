import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';
import CssBaseline from '@material-ui/core/CssBaseline';

import { GlobalFonts } from './assets/fonts';
import App from './components/App/App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalFonts />
    <ThemeProvider
      theme={{
        breakpoints: {
          values: {
            xs: '0',
            sm: '600px',
            md: '900px',
            lg: '1200px',
          },
        },
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
