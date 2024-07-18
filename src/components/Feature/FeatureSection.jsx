import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './FeatureSection.css'; // Import CSS file
import imgSrc from '../../assets/me.png'

const FeatureSection = () => {
  const featuresData = {
    title: "About Me",
    description: "I am passionate about leveraging technology to solve real-world problems and enhance user interactions. My expertise lies in developing intuitive user interfaces and robust back-end systems, allowing me to deliver comprehensive solutions.",
    description2: " From the simplicity of a black & white terminal to today, I've had the opportunity to work with various startups, an event organizing company, a large organization, and a student-led design club. Currently, my primary focus is on creating accessible and inclusive products and digital experiences for diverse clients.",
    btnLink: "https://www.linkedin.com/in/yosef-lakeww/",
    btnLabel: "Visit My LinkedIn",
   
  };

  const { title, description,description2, btnLink, btnLabel } = featuresData;

  return (
    <div className="feature-section-container group " id='aboutme' >
      <div className="feature-section-content">
        <div className="md:p-8 rounded-2xl flex-col flex md:flex-row gap-8 md:gap-16 justify-center items-center">
          <div className="feature-section-text">
            <h2 className='section__title underline underline-offset-8'><span className='rollno'>01. {title}</span></h2>
            <p className="feature-section-description">{description}</p><br />
            <p className="feature-section-description">{description2}</p>
            {/* If you want to display description twice, you can duplicate the paragraph */}
            {/* <p className="feature-section-description">{description}</p> */}
          </div>
          <div className="feature-section-image">
            <img
              src={imgSrc}
              alt="image"
              loading="lazy"
              className='group-hover:scale-105 transition-all ease-in-out duration-300'
            />
          </div>
        </div>
        <div className='flex justify-center my-8'>
          <Link to={btnLink} target='_blank'>
            <Button text={btnLabel} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
