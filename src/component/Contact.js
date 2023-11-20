import '../CSS/Contact.css';
import phone from '../icon/phone.svg';
import envelope from '../icon/envelope.svg';
import landmark from '../icon/landmark.svg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
    
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_64srsjx', 'template_0bu29ck', form.current, 'CqOO6J6Xf_TDZA3xO')
            .then((result) => {
                alert("Message sent");
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
        };

    return(
        <>
        <header>
 <div class="Contact">
    <h2>Contact</h2>
    <div class="Container"> 
   
    <div class="Contact-wrapper">
        <div class="Contact-form">
            <h3>Send us a message</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div class="form-group">
                    <input type="text" name="name" placeholder="your name"/>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="your email"/>
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="your message"></textarea>
                </div>
                <button type="submit">Send message</button>
            </form>
        </div>
        <div class="Contact-info">
        
            <h3>Contact information</h3>
           
            <p> <img src={phone} alt="html" class="icon" />  +1 234 567 890</p>
            <p><img src={envelope} alt="html" class="icon" />  info@gmail.com</p>
            <p><img src={landmark} alt="html" class="icon" />  Car street,Kumta,Uttara Kannada</p>
        </div>
    </div>
    </div>


               
   </div>     

</header>
</>
);
}
export default Contact;