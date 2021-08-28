import styled from 'styled-components/macro';
import Box from '@material-ui/core/Box';

export const App = styled(Box)`
  > * {
    min-width: ${({
      theme: {
        breakpoints: { values },
      },
    }) => `${values.lg}`};
  }

  h3 {
    display: flex;
    margin-top: 48px;
    margin-bottom: 16px;
  }
`;
