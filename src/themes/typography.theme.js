import { createTheme } from '@material-ui/core/styles';

import CreditCardWoff from '../assets/fonts/CreditCard.woff';
import CreditCardWoff2 from '../assets/fonts/CreditCard.woff2';

export const TypographyTheme = createTheme({
  typography: {
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'CreditCard';
          src:
              url(${CreditCardWoff}) format('woff2'),
              url(${CreditCardWoff2}) format('woff');
          font-weight: 400;
          font-style: normal;
        }
      `,
    },
  },
});
