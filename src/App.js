import React from "react";
import Accueil from "./pages/Accueil";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Carte from "./pages/Carte";
import Contact from "./pages/Contact";
import Galerie from "./pages/Galerie";
import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init({
  delay:100,
  duration:2000,
  
});



function App() {
  return (
    <div className="app">
      <BrowserRouter>
   <Routes>
    
    
      <Route exact path="/" element={<Accueil/>} />
      <Route exact path="/carte" element={<Carte/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/galerie" element={<Galerie/>} />

      
     
    
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
