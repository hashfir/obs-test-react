import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { UserProvider } from './context/UserContext';
import UserList from './components/UserList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <UserList />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
