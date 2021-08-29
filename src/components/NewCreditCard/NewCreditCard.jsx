import React from 'react';

import { NewCreditCard as NewCreditCardStyled } from './NewCreditCard.styles.jsx';

const NewCreditCard = ({ children }) => (
  <NewCreditCardStyled className="new-credit-card">
    {children}
  </NewCreditCardStyled>
);

export default NewCreditCard;
