import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
function FormulaireContact() {
    const form = useRef();
    

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current[0].value);
      emailjs.sendForm('service_uiatdl7', 'template_877erjm', form.current, 'user_MDKTJ0uyHeN1e8F4LKQSK')
        .then((result) => {
            alert('Votre message a bien été envoyé')
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className='formulaire input-field'>
            <h3>Nous vous invitons à participer à la boîte à idées :</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input type="email" required="{true}" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="Email" placeholder='Votre Email'></input>
              <input type="text" name="Nom" required="{true}" placeholder='Votre Nom'></input>
              <textarea name="Message" required="{true}" placeholder='Votre Idée'></textarea>
              <div className='bouttonFormulaire'>
              <button>Envoyer</button>
              </div>
            </form>
            
        </div>
    )
}

export default FormulaireContact
