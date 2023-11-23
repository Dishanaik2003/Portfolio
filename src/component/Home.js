import Landpage from "./Landpage";
import About_me from "./About_me";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Education from"./Education";

export default function Home(){
    return (
        <>
         <Landpage/>
        <About_me />
       <Skills/>
       <Education/>
        <Portfolio /> 
       <Contact />
      
       

</>
    )
}