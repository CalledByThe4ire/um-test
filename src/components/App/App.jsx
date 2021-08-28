import React from 'react';
import Container from '@material-ui/core/Container';
import { App as StyledApp } from './App.styles.jsx';
import CreditCards from '../CreditCards/CreditCards.jsx';

function App() {
  return (
    <StyledApp className="app">
      <Container className="app__container" disableGutters={false}>
        <CreditCards />
      </Container>
    </StyledApp>
  );
}
export default App;
