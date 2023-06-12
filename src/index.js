import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';

// COMPONENTS
import NavigationBar from "./components/NavigationBar"
import Footer from './components/Footer';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 900,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationBar />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
