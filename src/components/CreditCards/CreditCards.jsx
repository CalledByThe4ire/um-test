import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { cardsSelector } from '../../store/cards/cards.slice';
import CreditCardList from '../CreditCardList/CreditCardList.jsx';
import { CreditCards as CreditCardsStyled } from './CreditCards.styles.jsx';

const CreditCards = () => {
  const { items } = useSelector(cardsSelector);

  const renderLabel = () => {
    if (items.length === 0) {
      return 'Привязать карту';
    }

    return 'Привязать еще одну';
  };

  return (
    <CreditCardsStyled className="credit-cards">
      <Typography variant="h3" component="h3" className="credit-cards__title">
        Мои&nbsp;карты
      </Typography>
      <CreditCardList className="credit-cards__list" />
      <Button variant="contained" className="credit-cards__button">
        {renderLabel()}
      </Button>
    </CreditCardsStyled>
  );
};

export default CreditCards;
