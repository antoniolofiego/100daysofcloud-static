import React from 'react';
import './styles.css';

import Header from './components/Header';
import Hero from './components/Hero';
import HeroContent from './components/HeroContent';
import About from './components/About';
import Community from './components/Community';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <div className=''>
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
            <div id='join-us'>
                <CTA />
            </div>
            <Footer />
        </div>
    );
}

export default App;
