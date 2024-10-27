
import { Col, Container, Row, Stack } from "react-bootstrap";
import PropTypes from 'prop-types';
import "./ExperienceCard.css";

function ExperienceCard(props) {

    const { 
        first_card = false,
        last_card = false,
        experience,
    } = props;

    // return (
    //     <Container id="experience-list-item" 
    //         className="experience-list-item" 
    //         style={{ marginTop: first_card ? 30 : 50 }}
    //     >
    //         {/* <Fade left duration={2000} distance="40px"> */}
    //             <div className="experience-card-logo-div">
    //                 {
    //                     typeof experience.logo_path === 'string'
    //                         ? <img
    //                             className="experience-card-logo"
    //                             src={experience.logo_path}
    //                             alt="Company Logo"
    //                         />
    //                         : <experience.logo_path 
    //                             className="experience-card-logo" 
    //                             alt="Company Logo"
    //                         />
    //                 }
    //             </div>
    //         {/* </Fade> */}

    //         <div className="experience-card-stepper">
    //             <div className="experience-card-stepper-circle"  style={{backgroundColor: experience.color}}/>
    //             {!last_card && (
    //                 <div className="experience-card-stepper-line" />
    //             )}
    //         </div>

    //         {/* <Fade right duration={2000} distance="40px"> */}
    //             <div className="experience-card" >
    //                 <div className="experience-card-header">
    //                     <div>
    //                         <h3 className="experience-card-title" >
    //                             {experience.title}
    //                         </h3>
    //                         <p className="experience-card-company" >
    //                             <a
    //                                 href={experience.company_url}
    //                                 target="_blank"
    //                                 rel="noopener noreferrer"
    //                             >
    //                                 {experience.company}
    //                             </a>
    //                         </p>
    //                     </div>
    //                     <div>
    //                         <div className="experience-card-heading-right">
    //                             <p className="experience-card-duration" >
    //                                 {experience.duration}
    //                             </p>
    //                             <p className="experience-card-location" >
    //                                 {experience.location}
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div
    //                     style={{
    //                         display: "flex",
    //                         justifyContent: "flex-start",
    //                         marginTop: 20,
    //                     }}
    //                 >
    //                     <div className="experience-card-description">
    //                         {experience.description}
    //                     </div>
    //                 </div>
    //             </div>
    //         {/* </Fade> */}
    //     </Container>
    // );

//     return (
//         <Row id="experience-list-item" 
//             className="experience-list-item" 
//             style={{ paddingTop: first_card ? 30 : 50 }}
//         >
//             <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto" className="experience-card-logo-div">
//                 {
//                     typeof experience.logo_path === 'string'
//                         ? <img
//                             className="experience-card-logo"
//                             src={experience.logo_path}
//                             alt="Company Logo"
//                         />
//                         : <experience.logo_path 
//                             className="experience-card-logo" 
//                             alt="Company Logo"
//                         />
//                 }
//             </Col>

//             <Col 
//                 xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto" 
//                 className="experience-card-stepper"
//                 h-100
//             >
//                 <div></div>
//                 <div className="experience-card-stepper-circle"  style={{backgroundColor: experience.color}}/>
//                 {!last_card && (
//                     <div className="experience-card-stepper-line" />
//                 )}
//             </Col>

//             <Col className="experience-card" >
//                 <div className="experience-card-header">
//                     <div>
//                         <h3 className="experience-card-title" >
//                             {experience.title}
//                         </h3>
//                         <p className="experience-card-company" >
//                             <a
//                                 href={experience.company_url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 {experience.company}
//                             </a>
//                         </p>
//                     </div>
//                     <div>
//                         <div className="experience-card-heading-right">
//                             <p className="experience-card-duration" >
//                                 {experience.duration}
//                             </p>
//                             <p className="experience-card-location" >
//                                 {experience.location}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "flex-start",
//                         marginTop: 20,
//                     }}
//                 >
//                     <div className="experience-card-description">
//                         {experience.description}
//                     </div>
//                 </div>
//             </Col>
//         </Row>
//     );
// };

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

            {/* <Stack className="circle-stack" > */}
                <div className="experience-card-stepper-circle" /> 
            {/* </Stack> */}

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