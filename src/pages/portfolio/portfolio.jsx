import React from 'react';
import './portfolio.css';

const portfolioItems = [
  {
    title: "Jate",
    imageUrl: "/pwa.png",
    deployedUrl: "https://afternoon-sierra-89331-581330ee184e.herokuapp.com/",
    githubUrl: "https://github.com/KV647/pwa-kv"
  },
  {
    title: "Time-Scheduler",
    imageUrl: "/time.png",
    // deployedUrl: "https://afternoon-sierra-89331-581330ee184e.herokuapp.com/",
    githubUrl: "https://github.com/KV647/TimeSchedulerKV"
  },
  {
    title: "Beat Sphere",
    imageUrl: "/BeatSphere.png",
    deployedUrl: "https://beat-sphere-be92cb90b28f.herokuapp.com/",
    githubUrl: "https://github.com/BLam1226/BeatSphere"
  },
  {
    title: "Employee Tracker",
    imageUrl: "/tracker.png",
    deployedUrl: "https://drive.google.com/file/d/1wvI_tObvAcRT7EXJdfysT93C63dqtF_v/view",
    githubUrl: "https://github.com/KV647/EmployeeTrackerKV"
  },
  {
    title: "Travel Planned",
    imageUrl: "/travelplanned.png",
    deployedUrl: "https://blam1226.github.io/Travel-Planner/",
    githubUrl: "https://github.com/BLam1226/Travel-Planner"
  },
  {
    title: "Jate",
    imageUrl: "/pwa.png",
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
