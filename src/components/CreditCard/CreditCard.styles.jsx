import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export const CreditCard = styled(Paper)(({ theme }) => ({
  width: `calc((${theme.breakpoints.values.sm}px / 1.5) - (16px - 2px) * 2)`,
  height: `calc(((${theme.breakpoints.values.sm}px / 1.5) / 1.5) - (16px - 2px) * 2)`,
  paddingTop: '32px',
  paddingBottom: '32px',
  paddingLeft: '24px',
  borderRadius: '12px',

  header: {
    marginBottom: '48px',
  },

  p: {
    fontFamily: 'CreditCard, Arial, sans-serif',
    margin: '0',
    padding: '0',
  },
}));
