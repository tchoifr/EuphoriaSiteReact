import React from 'react';
import Navigation from '../components/Navigation';
import ImageFond from '../components/ImageFond';
import Presentation from '../components/Presentation';
import FooterRs from '../components/FooterRs'
const Accueil = () => {
    return (
        <div className='accueil'>
            <Navigation/>
            <ImageFond/>
            <Presentation/>
            <FooterRs/>
        </div>
    );
};

export default Accueil;