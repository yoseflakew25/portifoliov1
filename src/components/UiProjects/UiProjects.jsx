import React, { useState } from 'react';
import Button from "../UI/Button";
import { Icon } from "@iconify/react";
import crm from '../../assets/projects/crm.png';
import eskalate from '../../assets/projects/eskalate.png';
import job from '../../assets/projects/job portal.png';
import events from '../../assets/projects/events.png';
import brana from '../../assets/projects/brana.png';
import purple from '../../assets/projects/purple.png';
import cloud from '../../assets/projects/cloud.png';
import education from '../../assets/projects/education.png';

const UiProjects = () => {
  const projects = [
    {
      id: 1,
      title: "CRM Platform Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: crm,
      figmaLink: "https://www.figma.com/design/pfeOEdqjWsPEeDtAHb8ATD/CRM?node-id=14609-3&t=Vlo9FSPS7dPUYpF8-1",
      livePreviewLink: "#"
    },
    {
      id: 2,
      title: "Company Website Design For A2SV",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: eskalate,
      figmaLink: "#",
      livePreviewLink: "#"
    },
    {
      id: 3,
      title: "Job Finding Portal Website Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: job,
      figmaLink: "#",
      livePreviewLink: "#"
    },
    {
      id: 4,
      title: "Events Booking App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: events,
      figmaLink: "#",
      livePreviewLink: "#"
    },

    {
      id: 5,
      title: "Brana : A Bookstore App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: brana,
      figmaLink: "#",
      livePreviewLink: "#"
    },

    {
      id: 6,
      title: "Fitness Tracking App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: purple,
      figmaLink: "#",
      livePreviewLink: "#"
    },

    {
      id: 7,
      title: "Cloud Storage App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: cloud,
      figmaLink: "#",
      livePreviewLink: "#"
    },

    {
      id: 8,
      title: "Education App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: education,
      figmaLink: "#",
      livePreviewLink: "#"
    },
    // Add more projects as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <div className='flex flex-col gap-4 mx-32 my-16 items-center justify-center'>
      <h2 className='section__title underline underline-offset-8 mb-8'>
        <span className='rollno'>05. UI / UX Design Projects</span>
      </h2>
      <div className='flex items-center justify-center'>
        <Icon
          icon="gg:arrow-left-r"
          className="text-[14rem] cursor-pointer text-[#64FFDA] hover:text-white"
          onClick={handlePrevClick}
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center my-4 px-16 py-4'>
          <a href={currentProject.figmaLink} target='_blank'>

          <img src={currentProject.imgSrc} alt="" className="rounded-xl" />
          </a>
          <div className='flex flex-col items-start justify-start'>
            <h3 className='font-bold text-primary-500 mb-8 text-[#64FFDA]'>
              {currentProject.title}
            </h3>
            <p className='flex flex-col items-start justify-start'>
              {currentProject.description}
            </p>
            <div className='flex gap-4 items-center justify-center mt-8'>
            <a href={currentProject.figmaLink} target='_blank'><Button text='Figma file'  /> </a>
              <Button text='Live Preview' link={currentProject.livePreviewLink} />
            </div>
          </div>
        </div>
        <Icon
          icon="gg:arrow-right-r"
          className="text-[14rem] cursor-pointer text-[#64FFDA] hover:text-white"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default UiProjects;
