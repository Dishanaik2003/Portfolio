import '../CSS/Skills.css';

import github from "../icon/github.svg";
import html from "../icon/html.svg";
import javascript from "../icon/javascript.svg"
import cascad from "../icon/cascad.svg"
import reactjs from "../icon/reactjs.svg"
import nodejs from "../icon/nodejs.svg"
// import bootstrap from "../icon/bootstrap.svg"
// import php from "../icon/php.svg"
function Skills() {
    return(
        <>
        <header>
 <div class="skills">
    <h2>Skills</h2>
      
    <div class="container1">
    <img src={html} alt="html" class="icon" />
    <img src={cascad} alt="python" class="icon" />
    <img src={javascript} alt="javascript" class="icon" />
    <img src={reactjs} alt="github" class="icon" />
    <img src={nodejs} alt="github" class="icon" />
    {/* <img src={bootstrap} alt="github" class="icon" /> */}
    {/* <img src={php} alt="github" class="icon" /> */}
    <img src={github} alt="github" class="icon" />
    
    
    </div>     
   </div>     

</header>
</>
);
}
export default Skills;