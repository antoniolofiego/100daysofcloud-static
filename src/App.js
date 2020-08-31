import React from 'react';
import './styles.css';

import Header from './components/Header';
import Hero from './components/Hero';
import HeroContent from './components/HeroContent';
import About from './components/About';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <div className='pb-32'>
                <div className='flex flex-col h-screen'>
                    <Header />
                    <Hero />
                </div>
                <HeroContent />
            </div>
            <div id='about'>
                <About />
            </div>
            <div id='community'>
                <Community />
            </div>
            <Footer />
        </div>
    );
}

export default App;
