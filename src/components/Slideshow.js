import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function Slideshow() {

    return (
      <div className='containerCarousel'>
    <h2>Scène</h2>
        <Carousel width={'50%'}  showThumbs={false} className='carouselImg' >
           
        <div>
            <img src="img/scene/imageGalerie1.jpg" alt='img' />
            
        </div>
        <div>
            <img src="img/scene/imageGalerie2.jpg" alt='img' />
            
        </div>
        <div>
            <img src="img/scene/imageGalerie3.jpg" alt='img' />
            
        </div>

        <div>
            <img src="img/scene/imageGalerie4.jpg" alt='img' />
            
        </div>
        <div>
            <img src="img/scene/imageGalerie5.jpg" alt='img' />
            
        </div>
        <div>
               <img src="img/scene/imageGalerie6.jpg" alt='img' />
               
           </div>
        

        <div>
            <img src="img/scene/imageGalerie7.jpg" alt='img' />
            
        </div>
        <div>
            <img src="img/scene/imageGalerie8.jpg" alt='img' />
            
        </div>
        <div>
            <img src="img/scene/imageGalerie9.jpg" alt='img' />
            
        </div>
        

        <div>
            <img src="img/scene/imageGalerie10.jpg" alt='img' />
            
        </div>
        <div>
            <img src="img/scene/imageGalerie11.jpg" alt='img' />
            
        </div>
        <div>
            <img src="img/scene/imageGalerie12.jpg" alt='img' />
            
        </div>
        
        
    </Carousel>

    <h2>Gala</h2>
    <Carousel width={'50%'}  showThumbs={false} className='carouselImg' >
           
           <div>
               <img src="img/gala/gala1.jpg" alt='img' />
               
           </div>
           <div>
               <img src="img/gala/gala2.jpg" alt='img' />
               
           </div>
           <div>
               <img src="img/gala/gala3.jpg" alt='img' />
               
           </div>
   
           <div>
               <img src="img/gala/gala4.jpg" alt='img' />
               
           </div>
           <div>
               <img src="img/gala/gala5.jpg" alt='img' />
               
           </div>
          
           <div>
               <img src="img/gala/gala6.jpg" alt='img' />
               
           </div>
           <div>
               <img src="img/gala/gala7.jpg" alt='img' />
               
           </div>
           <div>
               <img src="img/gala/gala8.jpg" alt='img' />
               
           </div>  
   
           <div>
               <img src="img/gala/gala9.jpg" alt='img' />
               
           </div>
           
           
           
       </Carousel>
            <h2>Salle</h2>
       <Carousel width={'50%'}  showThumbs={false} className='carouselImg' >
           
       <div>
               <img src="img/galerie/salle1.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle2.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle3.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle4.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle5.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle6.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle7.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle8.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle9.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle10.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle11.jpg" alt='img'/>
               </div>
               <div>
               <img src="img/galerie/salle12.jpg" alt='img'/>
               </div>
              

           
   
           <div>
               <img src="img/galerie/imageGalerie4.jpg" alt='img' />
               
           </div>
           <div>
               <img src="img/galerie/imageGalerie5.jpg" alt='img'/>
               </div>
           
           
           
       </Carousel>


       
    </div>  
    )
}
export default Slideshow