import React, { useEffect, useState } from "react";
import'../CSS/Navbar.css'
import svgIcon from '../icon/hamburger.svg';
import {Link, useLocation} from "react-router-dom";
import Home from "./Home";
import About_me from "./About_me";
import Skills from "./Skills";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [locpath,setlocpath]=useState("/");
  const location=useLocation();

  useEffect(() =>
  {
   setlocpath(location.pathname);
   
  },[location]);


  const hamburger = (value) => {
    setNavbar(value);
  };
  return (
    <div className="navbar">
      <div className="container">
        <ul class="navlist">
          
        { locpath==="/"
         ?(
          ""
        ):(
        
     <li> < Link className="active" to={'/'}>Home</Link></li>
        )}   
        { locpath==="/about"
         ?(
          ""
        ):(

     <li> <Link to="/about">About</Link></li>
        )}
        { locpath==="/skills"
        ?(
         ""
       ):(

     <li><Link to="/skills">Skills</Link></li>
       )}
       { locpath==="/education"
        ?(
         ""
       ):(
     <li><Link to="/education">Education</Link></li>
     )} 
        { locpath==="/contact"
        ?(
         ""
       ):(
     <li><Link to="/contact">Contact</Link></li>
     )} </ul>
      <li className="hamburger">
        <span className="icon" onClick={() => hamburger(true)}>
         <img src={svgIcon} alt="Hamburger Icon" className="ham"/>
        </span>
      </li></div>
      {
      navbar ? (
        <>
          <div id="mysidebar" className="sidebar">
            <span className="closebtn" onClick={() => hamburger(false)}>
              &times;
            </span>
            <ul>   
        { location.pathname==="/"
         ?(
          ""
        ):(<li>
              < Link className="active" to={'/'}  onClick={() => hamburger(false)}>Home</Link>
              </li>)}
               
        { location.pathname==="/about"
         ?(
          ""
        ):( <li> 
              <Link to="/about"  onClick={() => hamburger(false)}>About</Link>
              </li>)}
       
        { location.pathname==="/skills"
         ?(
          ""
        ):( 
              <li>
              <Link to="/skills"  onClick={() => hamburger(false)}>Skills</Link>
              </li>)}
              { location.pathname==="/education"
         ?(
          ""
        ):( 
              <li>
              <Link to="/education"  onClick={() => hamburger(false)}>Education</Link>
              </li>)}
                     
        { location.pathname==="/contact"
         ?(
          ""
        ):( 
              <li>
              <Link to="/contact" onClick={() => hamburger(false)}>Contact</Link>
              </li>)}
            </ul>
          </div>
        </> 
      ) : (
        ""
      )}
    </div>
  );
 
}

export default Navbar;