import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ParallaxProvider } from 'react-scroll-parallax';

//Pages
import HomePage from './Pages/HomePage/HomePage';
import RandomStuff from './Pages/RandomPage/RandomStuff';

const theme = createTheme({
});

function App() {
    React.useEffect(() => {
        document.title = 'Portfolio';
    });

    return (
        <ThemeProvider theme={theme}>
            <ParallaxProvider>
                <Router basename='/'>
                    <Routes>
                        <Route exact path='/' element={<HomePage />} />
                        <Route path='/dev' element={<RandomStuff />} />
                    </Routes>
                </Router>
            </ParallaxProvider>
        </ThemeProvider>
    );
}

export default App;
