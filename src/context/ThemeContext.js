import { blue, purple } from '@mui/material/colors';
import { ThemeProvider as Theme, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
  typography: {
    fontFamily: ['Permanent Marker'].join(''),
  },
});

export const ThemeProvider = ({ children }) => {
  return <Theme theme={theme}>{children}</Theme>;
};
