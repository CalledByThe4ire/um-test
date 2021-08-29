import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';

import CreditCard from '../CreditCard/CreditCard.jsx';
import { CreditCardList as CreditCardListStyled } from './CreditCardList.styles.jsx';
import { cardsSelector } from '../../store/cards/cards.slice';
import { mapRange, format } from '../../utils/helpers/number.helpers';

const CreditCardList = () => {
  const { items } = useSelector(cardsSelector);

  const renderCreditCardList = () => {
    if (items.length !== 0) {
      return (
        <CreditCardListStyled
          className="credit-card-list"
          container
          spacing={2}
        >
          {items.map((card) => (
            <Grid item lg={4} key={uuidv4()}>
              <CreditCard sequence={mapRange(format(card), '•', 6, 4)} />
            </Grid>
          ))}
        </CreditCardListStyled>
      );
    }

    return (
      <Typography variant="overline" component="p">
        Пока вы&nbsp;не&nbsp;привязали ни&nbsp;одной карты.
      </Typography>
    );
  };

  return renderCreditCardList();
};

export default CreditCardList;
