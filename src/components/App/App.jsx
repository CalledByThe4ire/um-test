import React from 'react';
import Container from '@material-ui/core/Container';
import { App as AppStyled } from './App.styles.jsx';
import CreditCards from '../CreditCards/CreditCards.jsx';

const App = () => {
  return (
    <AppStyled className="app">
      <Container className="app__container">
        <CreditCards />
      </Container>
    </AppStyled>
  );
};
export default App;
