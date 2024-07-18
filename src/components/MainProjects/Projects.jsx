import React from 'react';
import PropTypes from 'prop-types';
import './EachProject.css';

const Projects = ({ project }) => {
  const {  projectUrlLink, projectGithubRepo, projectImage, projectTitle, projectDescription, projectTechStack } = project;

  return (
    <a href={projectUrlLink || projectGithubRepo} target='_blank' rel="noreferrer">
      <div className='eachProject'>
        <div className={`projectDetail alignLeft`}>
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
            {projectGithubRepo && (
              <a href={projectGithubRepo} target='_blank' rel="noreferrer">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            )}
            {projectUrlLink && (
              <a href={projectUrlLink} target='_blank' rel="noreferrer">
                <ion-icon name="link-outline"></ion-icon>
              </a>
            )}
          </div>
        </div>
      <div><img className='projectImage imageOverlap' alt="projectt" src={projectImage}></img></div>
      </div>
    </a>
  );
}


export default Projects;
