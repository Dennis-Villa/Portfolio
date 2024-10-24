
import { Container } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
import { uclvLogo, dataannotationLogo } from "../../Assets/Experience";

function Experience() {

    const experiences = [
        {            
            title: "AI Model Trainer",
            company: "DataAnnotation Tech",
            company_url: "https://www.dataannotation.tech/",
            logo_path: dataannotationLogo,
            duration: "Feb 2024 - May 2024",
            location: "New York, US",
            description:
                "My tasks included the training of Artificial Intelligence LLM models focused on answering programming queries, as well as some general functionality models. The training was based on generating, reviewing, correcting and comparing answers to programming problems and typical development cases. Among the languages I used with the models were: JavaScript, Python and C++.",
            color: "#f1dea1"
        },
        {
            title: "University Professor",
            company: "Universidad Central \"Marta Abreu\" de Las Villas",
            company_url: "https://www.uclv.edu.cu/",
            logo_path: uclvLogo,
            duration: "Mar 2022 - Jan 2024",
            location: "Villa Clara, Cuba",
            description:
                <p>Responsible for research and teaching the subject Programming in C++. I developed an Artificial Intelligence irrigation system for agriculture capable of reducing the total water consumption in protected crops. I participated in several international events and conventions such as:
                    <a href="https://convencion.uclv.cu/es/"> UCLV 2023 Convention</a>, 
                    <a href="https://apply.falling-walls.com/lab/"> Falling Wall Labs</a> and 
                    <a href="https://icpc.global/"> ICPC</a>.
                </p>,
            color: "#80bfcc"
        },
    ];

    return (
        <Container id="experience" className="experience">
            <h1 className="main-header experience-header">
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