import React from 'react';
import Container from '@material-ui/core/Container';
import { App as AppStyled } from './App.styles.jsx';
import CreditCards from '../CreditCards/CreditCards.jsx';
import Transfer from '../Transfer/Transfer.jsx';

const App = () => {
  return (
    <AppStyled className="app">
      <Container className="app__container">
        <CreditCards />
        <Transfer />
      </Container>
    </AppStyled>
  );
};
export default App;
