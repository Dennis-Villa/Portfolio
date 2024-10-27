
import { Stack } from "react-bootstrap";
import PropTypes from 'prop-types';
import "./ExperienceCard.css";

function ExperienceCard(props) {

    const { 
        first_card = false,
        last_card = false,
        experience,
    } = props;

    return (
        <Stack id="experience-list-item" 
            direction="horizontal"
            className="experience-list-item" 
        >
            <div className="experience-card-logo-div">
                {
                    typeof experience.logo_path === 'string'
                        ? <img
                            className="experience-card-logo"
                            src={experience.logo_path}
                            alt="Company Logo"
                        />
                        : <experience.logo_path 
                            className="experience-card-logo" 
                            alt="Company Logo"
                        />
                }
            </div>

            <Stack 
                gap={0}
                className="experience-card-stepper"
                style={{"--experience-logo-color": experience.color}}
            >
                <Stack>
                    {!first_card && (
                        <div className="experience-card-stepper-line up-line" />
                    )}
                </Stack>

                <div className="experience-card-stepper-circle" /> 

                <Stack>
                    {!last_card && (
                        <div className="experience-card-stepper-line down-line" />
                    )}
                </Stack>
            </Stack>

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
        </Stack>
    );
};

ExperienceCard.propTypes = {
    first_card: PropTypes.bool.isRequired,
    last_card: PropTypes.bool.isRequired,
    experience: PropTypes.object.isRequired,
};

export default ExperienceCard;