import '../CSS/Landpage.css';
import Homebase from "../icon/Homebase.gif";
function Landpage() {
    return(
        <>
        <header>
 
        <section class="h-txt">
            <div class="left">
            <h1>Hi,My name is Disha Naik and I am a <div class="w">Front End Developer</div></h1>
            </div>
            <div class="right">
            <img src={Homebase} alt="img" class="photo" />
            </div>
           
            
        </section>
</header>
</>
);
}
export default Landpage;