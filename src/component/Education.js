import "../CSS/Education.css";
import Card from "./Card";
function Education() {
  const Education1 = [
    {
      id: 1,
      h: "Degree",
      p: "I am currently pursuing BE in Computer Science and Engineering at Canara Engineering College,Benjanapadavu.",
      i:"grad"
    },
    {
      id: 2,
      h: "PUC",
      p: "I completed my PUC in my native place at Saraswati pU College,Kumta,Uttara Kannada",
      i:"grad"
    },
    {
      id: 3,
      h: "High School",
      p: "I completed my High School in  my native place at CVSK High School,Kumta,Uttara Kannada",
      i:"grad"
    },
  ];
  return (
    <>
    <h2>Education</h2>
    
      {/* <div id="education">
        
      </div>
      <div className="pd">
        <div id="primary">
          
          <p>
            My name is Disha.I am currently pursuing BE in Canara Engineering
            College,Benjanapadavu.I completed my PUC Saraswati pU
            College,Kumta.And I completed my High School in CVSK High
            School,Kumta.
          </p>
        </div>
        <div id="highschool">
          
          <p>
            My name is Disha.I am currently pursuing BE in Canara Engineering
            College,Benjanapadavu.I completed my PUC Saraswati pU
            College,Kumta.And I completed my High School in CVSK High
            School,Kumta.
          </p>
        </div>
        <div id="puc">
         
          <p>
            My name is Disha.I am currently pursuing BE in Canara Engineering
            College,Benjanapadavu.I completed my PUC Saraswati pU
            College,Kumta.And I completed my High School in CVSK High
            School,Kumta.
          </p>
        </div>
      </div> */}
      <div className="container2">
      {Education1.map((item) => (
        <Card Education1={item} />
      ))}
      </div>
    </>
  );
}
export default Education;
