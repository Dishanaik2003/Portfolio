import '../CSS/Contact.css';
import phone from '../icon/phone.svg';
import envelope from '../icon/envelope.svg';
import landmark from '../icon/landmark.svg';
function Contact() {
    return(
        <>
        <header>
 <div class="Contact">
    <h2>Contact</h2>
    <div class="Container"> 
   
    <div class="Contact-wrapper">
        <div class="Contact-form">
            <h3>Send us a message</h3>
            <form>
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