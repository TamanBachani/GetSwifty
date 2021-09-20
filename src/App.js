import './three.css';
import Hero from './Hero';
import { Generate } from './Gen'
import { Footer } from './Footer'
import { Lyrics } from './Lyrics';
import React from 'react';
function App() {
    return (
        <React.Fragment>
            <Hero />
            <Generate />
            <Lyrics />
            <Footer />
        </React.Fragment>
    )
}

export default App;
