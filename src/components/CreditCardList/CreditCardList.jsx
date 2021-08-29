import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CreditCard from '../CreditCard/CreditCard.jsx';
import { CreditCardList as CreditCardListStyled } from './CreditCardList.styles.jsx';
import { cardsSelector } from '../../store/cards/cards.slice';
import { mapRange, format } from '../../utils/helpers/number.helpers';

const CreditCardList = () => {
  const { cards } = useSelector(cardsSelector);

  const renderCreditCardList = () => {
    if (cards.length !== 0) {
      return (
        <CreditCardListStyled
          className="credit-card-list"
          container
          spacing={2}
        >
          {cards.map((card) => (
            <Grid item lg={4} key={card.id}>
              <CreditCard cardNumber={mapRange(format(card.cardNumber), '•', 6, 4)} />
            </Grid>
          ))}
        </CreditCardListStyled>
      );
    }

    return (
      <Typography variant="body1" component="p">
        Пока вы&nbsp;не&nbsp;привязали ни&nbsp;одной карты.
      </Typography>
    );
  };

  return renderCreditCardList();
};

export default CreditCardList;
