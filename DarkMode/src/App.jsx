// App.js
import React from 'react';
import ThemeProvider from './components/ThemeContext';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import ThemeToggleButton from './components/ThemeToggleButton';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Wrapper>
        <Header title="Welcome to My Site" subtitle="Let switch between dark and white" />
        <ThemeToggleButton />
        <Gallery />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
