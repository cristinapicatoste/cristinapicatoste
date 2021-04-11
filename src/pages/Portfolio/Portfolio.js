import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import { projects } from '../../data/projects';

import './Portfolio.scss';


const Portfolio = () => {
  return (
    <div className="portfolio-wrap">
      <h1 className="fadeInDown">Porfolio</h1>
      <div className="portfolio-items">
        {projects.map(project => (
          <PortfolioItem
            key={project.id}
            project={project}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            year={project.year}
            tech={project.tech}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
