import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const CreditCard = styled(Paper)(({ theme }) => {
  return {
    width: `calc((${theme.breakpoints.values.sm}px / 1.5) - (16px - 2px) * 2)`,
    height: `calc(((${theme.breakpoints.values.sm}px / 1.5) / 1.5) - (16px - 2px) * 2)`,
    paddingTop: '32px',
    paddingRight: '24px',
    paddingBottom: '32px',
    paddingLeft: '24px',
    borderRadius: '12px',
  };
});

export const CreditCardHeader = styled('header')({
  marginBottom: '48px',
});

export const CreditCardNumber = styled(Typography)({
  fontFamily: 'CreditCard, Arial, sans-serif',
  margin: '0',
  padding: '0',
});
