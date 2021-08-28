import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreditCardList from '../CreditCardList/CreditCardList.jsx';
import { CreditCards as StyledCreditCards } from './CreditCards.styles.jsx';

const CreditCards = () => {
  return (
    <StyledCreditCards className="credit-cards">
      <Typography variant="h3" component="h3" className="credit-cards__title">
        Мои&nbsp;карты
      </Typography>
      <CreditCardList items={12} />
      <Button variant="contained" className="credit-cards__button">
        Привязать еще одну
      </Button>
    </StyledCreditCards>
  );
};

export default CreditCards;
