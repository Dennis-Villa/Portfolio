
import { Container } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
import muffitoLogo from "../../Assets/Experience/muffito_logo.png";
import freecopyLogo from "../../Assets/Experience/freecopy_logo.png";
function Experience() {

    const experiences = [
        {
            title: "Android and ML Developer",
            company: "Muffito Incorporation",
            company_url: "https://www.linkedin.com/company/muffito-inc/about/",
            logo_path: muffitoLogo,
            duration: "May 2018 - Oct 2018",
            location: "Pune, Maharashtra",
            description:
                "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
            color: "#9b1578"
        },
        {            
            title: "Android Developer",
            company: "FreeCopy Pvt. Ltd.",
            company_url: "https://www.linkedin.com/company/freecopy/about/",
            logo_path: freecopyLogo,
            duration: "Nov 2017 - Dec 2017",
            location: "Ahmedabad, Gujarat",
            description:
                "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
            color: "#fc1f20"
        },
    ];

    return (
        <Container id="experience" className="experience">
            <h1 className="experience-heading">
                Work Experience
            </h1>

            <ExperienceCard 
                first_card={true} 
                last_card={false} 
                experience={experiences[0]} 
            />
            <ExperienceCard 
                first_card={false} 
                last_card={true} 
                experience={experiences[1]} 
            />
      </Container>
    );
};

export default Experience;