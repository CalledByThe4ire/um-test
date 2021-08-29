import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import CreditCard from '../CreditCard/CreditCard.jsx';
import { CreditCardList as CreditCardListStyled } from './CreditCardList.styles.jsx';
import { random, mapRange, format } from '../../utils/helpers/number.helpers';

const CreditCardList = ({ items }) => (
  <CreditCardListStyled className="credit-card-list" container spacing={2}>
    {Array.from({ length: items }).map((item) => (
      <Grid item lg={4} key={uuidv4()}>
        <CreditCard
          sequence={mapRange(
            format(random(_.padStart('1', 16, '0'), _.padEnd('9', 16, '9'))),
            '•',
            6,
            4
          )}
        />
      </Grid>
    ))}
  </CreditCardListStyled>
);

CreditCardList.propTypes = {
  items: PropTypes.number,
};

export default CreditCardList;
