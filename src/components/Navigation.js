import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        
        <div className='navigation'>
             <a href='https://module.lafourchette.com/fr_FR/module/721479-593bf#/4647977/pdh'>   <button className='boutonNav'><i className="fas fa-utensils iconNav"></i>Réservation</button></a>
           <ul>
               <NavLink exact to='/' className="hover" activeclassname="nav-active">
                <li>L'Euphoria</li>
               </NavLink>

               
               <NavLink exact to='/carte' className="hover" activeclassname="nav-active">
                <li>La carte</li>
               </NavLink>
               
               <NavLink exact to='/galerie' className="hover" activeclassname="nav-active">
                <li>Galerie photos</li>
               </NavLink>

               <NavLink exact to='/contact' className="hover" activeclassname="nav-active">
                <li>Contact</li>
               </NavLink>
               
            
           </ul>
             
         
        </div>
    );
};

export default Navigation;