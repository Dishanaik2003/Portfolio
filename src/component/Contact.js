import '../CSS/Contact.css';
import phone from '../icon/phone.svg';
import envelope from '../icon/envelope.svg';
import landmark from '../icon/landmark.svg';
import spinner2 from "../icon/spinner2.gif";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [loader,setloader]=useState();
        const form = useRef();
        
        const sendEmail = (e) => {
          e.preventDefault();
            setloader(true);
          emailjs.sendForm('service_64srsjx', 'template_0bu29ck', form.current, 'CqOO6J6Xf_TDZA3xO')
            .then((result) => {
            
            alert("Message sent");
            setloader(false);
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
            <h3>Drop a Message!</h3>
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
            
               { !loader ?
        
               ( <button type="submit">Send message</button>)
                :
               ( <img src={spinner2}  class="icon" /> )}
            </form>
        </div>
        <div class="Contact-info">
        
            <h3>Contact information</h3>
           
            <p> <img src={phone} alt="html" class="icon" /> +91 9449533627</p>
            <p><img src={envelope} alt="html" class="icon" />  naikdisha2003@gmail.com</p>
            <p><img src={landmark} alt="html" class="icon" />  Kodkani,Kumta,Uttara Kannada</p>
        </div>
    </div>
    </div>


               
   </div>     

</header>

</>

);
}

export default Contact;