import React from 'react';
import './App.css';
import { Layout }  from './components/Layout/Layout'
import { ThemeProvider } from '@mui/material/styles';
import theme  from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;
