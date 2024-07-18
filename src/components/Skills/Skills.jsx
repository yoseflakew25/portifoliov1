import React from 'react';
import uniqid from 'uniqid';
import skills from './skills.js';
import './Skills.css';

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title underline underline-offset-8'><span className='rollno'>02. Skills</span></h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item'>
            <button className="rounded-lg border-2 border-solid border-[#64FFDA] bg-transparent text-sm px-6 py-2 font-semibold uppercase text-[#64FFDA] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#64FFDA] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              {skill}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
