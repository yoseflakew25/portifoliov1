import React from 'react';
import './Experiance.css';

const TimelineItem = ({ title, date, organization, description }) => (
  <li className="timeline-item">
    <h4 className="h4 timeline-item-title text-[#64FFDA] mb-4">{title}</h4>
    <span style={{ color: "blanchedalmond" }}>{date}</span>
    {organization && <p className="timeline-text mb-4" style={{ color: "blanchedalmond" }}>{organization}</p>}
    <p className="timeline-text mb-8">{description}</p>
  </li>
);

const Experiance = () => {
  return (
    <article className="resume mx-8 lg:mx-80 mb-16 mt-32" id='experinace'>
      <h2 className='section__title underline underline-offset-8'><span className='rollno'>03. Education & Experience</span></h2>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3 text-[#64FFDA]">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING"
            date="2019 — 2024"
            organization="Addis Ababa Science and Technology University, AA."
            description=""
          />
          <TimelineItem
            title="AWS Cloud Practitioner by ALX"
            date="2024 —"
            organization="ALX"
            description="ALX is an Amazon Web Services (AWS) Academy member institution. This programme is developed and maintained by AWS, a world leader in cloud technologies."
          />
          <TimelineItem
            title="Data Structure and Algorithm"
            date="2015 — 2016"
            organization="Africa to Silicon Valley (A2SV) Organization"
            description="A2SV is a social enterprise that enables high-potential university students to create digital solutions to Africa’s most pressing problems."
          />
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="code-working-outline"></ion-icon>
          </div>
          <h3 className="h3 text-[#64FFDA]">Experience</h3>
        </div>
        <ol className="timeline-list">
        <TimelineItem
            title="UI DESIGNER AND FRONT-END DEVELOPER"
            date="2022 — Present"
            organization="Addis Ababa Science and Technology University"
            description="I led the design, development, and implementation of a university department's website layout. I created site maps and mockups based on proven methodologies and user feedback."
          />

          
        <TimelineItem
            title="UI DESIGNER AND FRONT-END DEVELOPER"
            date="2022 — Present"
            organization="Addis Ababa Science and Technology University"
            description="I led the design, development, and implementation of a university department's website layout. I created site maps and mockups based on proven methodologies and user feedback."
          />
          <TimelineItem
            title="UI DESIGNER AND FRONT-END DEVELOPER"
            date="2022 — Present"
            organization="Addis Ababa Science and Technology University"
            description="I led the design, development, and implementation of a university department's website layout. I created site maps and mockups based on proven methodologies and user feedback."
          />
          <TimelineItem
            title="UI DESIGN LEAD"
            date="2022"
            organization="Addis Ababa Science and Technology University"
            description="I led the design of a university department's website, delegating tasks to a team of seven designers and consulting on all aspects of the project."
          />
          <TimelineItem
            title="UI DESIGNER & FRONT-END DEVELOPER"
            date="2021"
            organization="Visit Oromia, Hackathon"
            description="I created design presentations, logos, and a UI for a mobile app. Using JavaScript, HTML, and CSS, I implemented the UI design into a highly functional web application."
          />
        </ol>
      </section>
    </article>
  );
}

export default Experiance;
