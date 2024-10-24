
import Card from "react-bootstrap/Card";
import "./AboutCard.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            My name is <span className="important-text">Dennis Villavicencio Quintero</span> and I started to get into programming over 8 years ago. The language I started with was C++ and I actively used it in my training for international programming competitions like the ICPC.
            <br />
            <br />
            I started in web programming as a hobby and it soon became my main focus and the area where I seek to focus all the tools and knowledge I have.
            As part of my professional development I completed a training as a Cybersecurity Specialist, which in addition to improve my way of working has prompted me to develop an open source project very focused in this field.
            <br />
            <br />
            I am eager to hear from you, to see how I can help you with my knowledge. So do not doubt to contact me.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
