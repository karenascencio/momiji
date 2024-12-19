import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B2E2D', // Crimson red
      light: '#FAF4E6', // Soft beige  
      dark: '#543E36', // Deep brown
    },
    secondary: {
      main: '#A7532B', // Burnt orange
      light: '#B68E3D', // Golden yellow
      dark: '#4A5D54', // Forest green
    }
  },
  typography: {
    h1: {
      fontFamily: 'Playfair Display, serif',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
    },
    body1: {
      fontFamily: 'Poppins, serif'
    }
  },
});

export default theme;