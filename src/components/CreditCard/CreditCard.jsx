import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { CreditCard as CreditCardStyled } from './CreditCard.styles.jsx';

const CreditCard = ({ sequence, name }) => (
  <CreditCardStyled className="credit-card" variant="outlined" square={true}>
    <header>
      <Typography component="h6" variant="h6">
        {name}
      </Typography>
    </header>

    <Typography variant="subtitle1" paragraph={true}>
      {sequence}
    </Typography>
  </CreditCardStyled>
);

CreditCard.defaultProps = {
  name: 'Bank Name',
};

CreditCard.propTypes = {
  name: PropTypes.string,
  sequence: PropTypes.string,
};

export default CreditCard;
