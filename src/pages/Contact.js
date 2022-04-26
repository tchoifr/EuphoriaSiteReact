import React from 'react';
import Navigation from '../components/Navigation';
import FooterRs from '../components/FooterRs';
import FormulaireContact from '../components/FormulaireContact';
const Contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <FormulaireContact/>
            <FooterRs/>
        </div>
    );
};

export default Contact;