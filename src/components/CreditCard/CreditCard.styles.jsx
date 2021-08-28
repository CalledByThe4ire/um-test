import styled, { css } from 'styled-components/macro';
import Paper from '@material-ui/core/Paper';

export const CreditCard = styled(Paper)`
  width: ${({
    theme: {
      breakpoints: { values },
    },
  }) => css`
    calc((${values.sm} / 1.5) - (16px - 2px) * 2)
  `};
  height: ${({
    theme: {
      breakpoints: { values },
    },
  }) => css`
    calc(((${values.sm} / 1.5) / 1.5) - (16px - 2px) * 2)
  `};
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  border-radius: 12px;

  header {
    margin-bottom: 48px;
  }

  p {
    font-family: 'CreditCard', Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;
