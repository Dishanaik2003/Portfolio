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
              Hello, I'm Disha Naik,aspiring Front End developer.I am currently
              pursuing B.E degree in Computer Science and Engineering at CANARA
              ENGINEERING COLLEGE. I'm passionate about crafting exceptional
              websites that seamlessly blend creativity and functionality.I've
              done projects like React based portfolio and Quiz Website using
              HTML,CSS,JavaScript,PHP,mysql. I've done various certifications on
              Web development.My hobbies are Listening to music and Painting.
              {/* <div class="a">Let's collaborate on your next project and build something extraordinary together!</div> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About_me;
