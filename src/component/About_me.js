import "../CSS/About_me.css";
import me from "../images/me.jpg";
import img2 from "../images/img2.jpeg";
function About_me() {
  return (
    <>
      <div id="about">
        <div class="firstsection">
          <div class="leftsection">
            <img src={me} alt="img" class="photo" />
          </div>
          <div class="rightsection">
            <h2>About Me</h2>
          
            <p>
              Hello, I'm Disha Naik,and I'm passionate about crafting
              exceptional websites that seamlessly blend creativity and
              functionality. As a seasoned web developer with 2 yearsof
              hands-on experience, I've had the privilege of working on diverse
              projects, from responsive landing pages to robust e-commerce
              platforms. My expertise lies in Front-End web development.
            <div class="a">Let's collaborate on your next project and build something extraordinary together!</div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About_me;
