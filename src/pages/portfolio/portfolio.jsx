import React from 'react';
import './portfolio.css';

const portfolioItems = [
  {
    title: "Jate",
    imageUrl: "./build/pwa.png",
    deployedUrl: "https://afternoon-sierra-89331-581330ee184e.herokuapp.com/",
    githubUrl: "https://github.com/KV647/pwa-kv"
  },
  {
    title: "Time-Scheduler",
    imageUrl: "./build/time.png",
    // deployedUrl: "https://afternoon-sierra-89331-581330ee184e.herokuapp.com/",
    githubUrl: "https://github.com/KV647/TimeSchedulerKV"
  },
  {
    title: "Code Quiz",
    imageUrl: "./build/quiz2.png",
    // deployedUrl: "https://afternoon-sierra-89331-581330ee184e.herokuapp.com/",
    githubUrl: "https://github.com/KV647/CodeQuizKV2"
  },
  {
    title: "Employee Tracker",
    imageUrl: "./build/tracker.png",
    deployedUrl: "https://drive.google.com/file/d/1wvI_tObvAcRT7EXJdfysT93C63dqtF_v/view",
    githubUrl: "https://github.com/KV647/EmployeeTrackerKV"
  },
  {
    title: "Travel Planned",
    imageUrl: "./build/travelplanned.png",
    deployedUrl: "https://blam1226.github.io/Travel-Planner/",
    githubUrl: "https://github.com/BLam1226/Travel-Planner"
  },
  {
    title: "Jate",
    imageUrl: "./build/pwa.png",
    deployedUrl: "https://afternoon-sierra-89331-581330ee184e.herokuapp.com/",
    githubUrl: "https://github.com/KV647/pwa-kv"
  }
];


  const Portfolio = () => {
    return (
      <section>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              <a href={item.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Portfolio;
