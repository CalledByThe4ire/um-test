import { createGlobalStyle } from 'styled-components/macro';

import CreditCardWoff from './CreditCard.woff';
import CreditCardWoff2 from './CreditCard.woff2';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'CreditCard';
    src:
        url(${CreditCardWoff}) format('woff2'),
        url(${CreditCardWoff2}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
