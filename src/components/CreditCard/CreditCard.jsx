import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { CreditCard as StyledCreditCard } from './CreditCard.styles.jsx';

const CreditCard = ({ sequence, name }) => (
  <StyledCreditCard className="credit-card" variant="outlined" square={true}>
    <header>
      <Typography component="h6" variant="h6">
        {name}
      </Typography>
    </header>

    <Typography variant="subtitle1" paragraph={true}>
      {sequence}
    </Typography>
  </StyledCreditCard>
);

CreditCard.defaultProps = {
  name: 'Bank Name',
};

CreditCard.propTypes = {
  name: PropTypes.string,
  sequence: PropTypes.string,
};

export default CreditCard;
