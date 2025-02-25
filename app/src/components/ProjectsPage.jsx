import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { SocialIcons } from "./Navigation";
import "./ProjectsPage.css";

const dataUrl = "/data/data.json";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch(dataUrl)
        .then((res) => res.json())
        .then((data) => setProjects(data.projects))
        .catch((err) => console.error("Failed to load projects", err));
    }, []);

    return (
        <section id="projects-page" className="projects wrapper page scrollable">
            <section className="body">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h1>Projects</h1>
                    <div className="divider"></div>
                </div>
                <div className="inner project-items">
                    <div className="row">
                        {
                            projects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))
                        }
                    </div>
                </div>
                <div className="inner contact-info">
                    <SocialIcons iconSize="fa-lg" backIcon={true}/>
                </div>
            </section>
        </section>
    )
};

const ProjectCard = ({ project }) => {
    return (
        <div className='col-xxl-4 col-md-6 col-sm-12 col-xs-12' data-aos='zoom-in-up' data-aos-duration='1000'>
            <div className='img-thumbnail box'>
                <img className='img-fluid' src={project.img} />
                <div className='caption'>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
                <div className="link">
                    <a className="hvr-icon-grow" href={project.link} target="_blank">
                        <div className="corner-triangle"></div>
                        <FontAwesomeIcon icon={project.link.includes("github") ? faGithub : faLink} className="fa-2x icon hvr-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ProjectsPage;