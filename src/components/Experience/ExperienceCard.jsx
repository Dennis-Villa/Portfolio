
import { Container } from "react-bootstrap";
import PropTypes from 'prop-types';
import "./ExperienceCard.css";

function ExperienceCard(props) {

    const { 
        first_card = false,
        last_card = false,
        experience,
    } = props;

    return (
        <Container id="experience-list-item" 
            className="experience-list-item"
            style={{ marginTop: first_card ? 30 : 50 }}
        >
            {/* <Fade left duration={2000} distance="40px"> */}
                <div className="experience-card-logo-div">
                    <img
                        className="experience-card-logo"
                        src={experience.logo_path}
                        alt="Company Logo"
                    />
                </div>
            {/* </Fade> */}

            <div className="experience-card-stepper">
                <div className="experience-card-stepper-circle"  style={{backgroundColor: experience.color}}/>
                {!last_card && (
                    <div className="experience-card-stepper-line" />
                )}
            </div>

            {/* <Fade right duration={2000} distance="40px"> */}
                <div className="experience-card" >
                    <div className="experience-card-header">
                        <div>
                            <h3 className="experience-card-title" >
                                {experience.title}
                            </h3>
                            <p className="experience-card-company" >
                                <a
                                    href={experience.company_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {experience.company}
                                </a>
                            </p>
                        </div>
                        <div>
                            <div className="experience-card-heading-right">
                                <p className="experience-card-duration" >
                                    {experience.duration}
                                </p>
                                <p className="experience-card-location" >
                                    {experience.location}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: 20,
                        }}
                    >
                        <div className="experience-card-description">
                            {experience.description}
                        </div>
                    </div>
                </div>
            {/* </Fade> */}
        </Container>
    );
};

ExperienceCard.propTypes = {
    first_card: PropTypes.bool.isRequired,
    last_card: PropTypes.bool.isRequired,
    experience: PropTypes.object.isRequired,
};

export default ExperienceCard;