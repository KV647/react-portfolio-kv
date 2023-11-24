import React from 'react';
import './resume.css';

const Resume = () => {
  return <p className='HomeP4'>

<a href="/Keller-Resume.pdf" download>Download my resume</a>
  <ul>
  <h1>Front-end</h1>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>jQuery</li>
    <li>Responsive Design</li>
    <li>React</li>
    <li>Bootstrap</li>
    <li>Handlebars</li>
   </ul>

   <ul>
  <h1>Back-end</h1>
    <li>API</li>
    <li>Node</li>
    <li>Express</li>
    <li>MySQL, Sequelize</li>
    <li>MongoDB, Mongoose</li>
    <li>GraphQL</li>
    <li>Progressive Web Applications</li>
    <li>Webpack</li>
   </ul>
</p>;
}

export default Resume;