
import Card from "react-bootstrap/Card";
import "./AboutCard.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            I’m Dennis Villavicencio Quintero, and I’ve been programming for over 8 years. I began with C++, using it in international competitions like the ICPC, which built my foundation in problem-solving. Later, I moved into web development, which became my main focus.
            <br />
            <br />
            Alongside my web development work, I completed a certification as a Cybersecurity Specialist. This training has not only improved my approach to secure coding but also inspired me to develop an open-source project in cybersecurity. I’m always excited to explore how I can apply my knowledge to new projects, so feel free to reach out. I’d love to connect and discuss how I can help.
            {/* I also completed training as a Cybersecurity Specialist, which enhanced my approach to secure coding and inspired me to create an open-source project in this area. I’m eager to connect and see how I can support new projects, so feel free to reach out! */}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
