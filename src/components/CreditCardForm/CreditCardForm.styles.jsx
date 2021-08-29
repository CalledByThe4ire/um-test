import { styled } from '@material-ui/core/styles';

export const CreditCardForm = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',

  '& .credit-card-form-field': {
    position: 'relative',
    width: '100%',
    marginBottom: '32px',
    '&:not(:first-of-type)': {
      width: 'calc(50% - 8px)',
    },
  },

  '& .credit-card-form-field__input': {
    width: '100%',
  },
  '& .credit-card-form__controls': {
    position: 'absolute',
    left: '0',
    top: 'calc(100% + 24px)',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  '& .credit-card-form__button': {
    '&:disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'all',
    },
  },
  '& .credit-card-form-field__error-message': {
    fontSize: '12px',
    color: theme.palette.error.main,
  },
}));
