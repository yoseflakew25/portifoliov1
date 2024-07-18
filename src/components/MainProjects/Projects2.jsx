import React from 'react';
import './EachProject.css';

const Projects2 = ({ project }) => {
    const { projectUrlLink, projectGithubRepo, projectImage, projectTitle, projectDescription, projectTechStack } = project;

    const renderGithubLink = projectGithubRepo && projectGithubRepo !== "";
    const renderOtherLink =  projectUrlLink && projectUrlLink !== "";

    const link = projectUrlLink ? projectUrlLink : projectGithubRepo;

    return (
        <a href={link} target='_blank' rel="noreferrer">
            <div className='eachProject'>
                <div>
                    <a href='#' target='_blank'><img className='projectImage' alt="project" src={projectImage} /></a>
                </div>
                <div className='projectDetail alignRight imageOverlap'>
                    <span className='linkText' style={{ fontSize: '14px', color: "#60F3D1" }}> Featured Project </span>
                    <h1 className='projectTitle'> {projectTitle} </h1>
                    <div className='projectDescription'>
                        <p> {projectDescription} </p>
                    </div>
                    <ul className='projectTechStack'>
                        {projectTechStack.map((tech, index) => (
                            <li key={index}> {tech} </li>
                        ))}
                    </ul>
                    <div className='githubAndOtherLInk'>
                        {renderGithubLink && (
                            <a href={projectGithubRepo} target='_blank' rel="noreferrer">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        )}
                        {renderOtherLink && (
                            <a href={projectUrlLink} target='_blank' rel="noreferrer">
                                <ion-icon name="link-outline"></ion-icon>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Projects2;
