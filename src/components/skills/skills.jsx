import React from 'react';
import './skills.css';

import css3 from '../../icons/css3.png';
import express from '../../icons/express.png';
import github from '../../icons/github.png';
import html from '../../icons/html.png';
import javascript from '../../icons/javascript.png';
import nodejs from '../../icons/nodejs.png';
import react from '../../icons/react.png';
import redux from '../../icons/redux.png';
import postgresql from '../../icons/postgresql.png';
import sequelize from '../../icons/sequelize.png';
import mongodb from '../../icons/mongodb.png';

const skillsData = [
  { image: html, name: 'HTML' },
  { image: css3, name: 'CSS' },
  { image: react, name: 'React' },
  { image: redux, name: 'Redux' },
  { image: javascript, name: 'JavaScript' },
  { image: nodejs, name: 'Node.js' },
  { image: postgresql, name: 'PostgreSQL' },
  { image: mongodb, name: 'MongoDB' },
  { image: sequelize, name: 'Sequelize' },
  { image: express, name: 'Express' },
  { image: github, name: 'GitHub' },
];

const SkillItem = ({ image, name }) => (
  <div className="image-text">
    <img className="image-skill" src={image} alt={name} />
    <span className="text-skill">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <div name="skills" className="div-skills">
      <div>
        <span className="skills-title">Skills</span>
      </div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <SkillItem key={index} image={skill.image} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
