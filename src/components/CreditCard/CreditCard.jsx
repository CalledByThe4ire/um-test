import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import {
  CreditCard as CreditCardStyled,
  CreditCardHeader,
  CreditCardNumber,
} from './CreditCard.styles.jsx';

const CreditCard = ({ cardNumber, name }) => (
  <CreditCardStyled className="credit-card" square={true} elevation={6}>
    <CreditCardHeader>
      <Typography component="h6" variant="h6">
        {name}
      </Typography>
    </CreditCardHeader>

    <CreditCardNumber variant="subtitle1" component="p">
      {cardNumber}
    </CreditCardNumber>
  </CreditCardStyled>
);

CreditCard.defaultProps = {
  name: 'Bank Name',
};

CreditCard.propTypes = {
  name: PropTypes.string,
  cardNumber: PropTypes.string,
};

export default CreditCard;
