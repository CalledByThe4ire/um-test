import { styled } from '@material-ui/core/styles';

export const NewCreditCard = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: `calc((${theme.breakpoints.values.sm}px / 1.5) - (16px - 2px) * 2)`,
    minHeight: `calc(((${theme.breakpoints.values.sm}px / 1.5) / 1.5) - (16px - 2px) * 2)`,
    paddingTop: 'calc(24px * 1.5)',
    paddingRight: '24px',
    paddingBottom: 'calc(24px * 1.5)',
    paddingLeft: '24px',
    marginBottom: '24px',

    '& .new-credit-card__inner': {
      position: 'absolute',
      top: '0',
      left: '0',
    },
  };
});
