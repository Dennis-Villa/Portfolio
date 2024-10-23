import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { PiArticleMediumDuotone } from "react-icons/pi";

import "./ProjectCard.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-card-image" />
      <Card.Body>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Subtitle className="project-tecnologies">
          <ul className="project-card-icon-list">
            {props.tecnologies && props.tecnologies.map(item => {
              return (
                <li key={item.name} className="project-card-icon">
                  <item.icon className="tecnology-icon"/>
                </li>
              )
            })}
          </ul>
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" className="project-card-button">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
             className="project-card-button"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        
        {props.articleLink && (
          <Button
            variant="primary"
            href={props.articleLink}
            target="_blank"
            className="project-card-button"
          >
            <PiArticleMediumDuotone /> &nbsp;
            {"Article"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isBlog: PropTypes.bool.isRequired,
  ghLink: PropTypes.string,
  demoLink: PropTypes.string,
  articleLink: PropTypes.string,
  tecnologies: PropTypes.array,
};

export default ProjectCards;
