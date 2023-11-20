import '../CSS/Landpage.css';
import de from "../images/de.jpg";
function Landpage() {
    return(
        <>
        <header>
 
        <section class="h-txt">
            <div class="left">
            <h1>Hi,My name is Disha Naik and I am a <div class="w">Web Developer</div></h1>
            </div>
            <div class="right">
            <img src={de} alt="img" class="photo" />
            </div>
           
            
        </section>
</header>
</>
);
}
export default Landpage;