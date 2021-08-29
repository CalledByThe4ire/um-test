import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const App = styled(Box)(({ theme }) => ({
  minWidth: `${theme.breakpoints.values.lg}px`,
}));
