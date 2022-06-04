import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import HomePage from './Pages/HomePage/HomePage';

const theme = createTheme({
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HomePage />
        </ThemeProvider>
    );
}

export default App;
