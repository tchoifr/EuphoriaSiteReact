import React from 'react';
import Navigation from '../components/Navigation';
import FooterRs from '../components/FooterRs';
import Slideshow from '../components/Slideshow';
const Galerie = () => {
    return (
        <div className='galerie'>
            <Navigation/>
            <Slideshow/>
            <FooterRs/>
        </div>
    );
};

export default Galerie;