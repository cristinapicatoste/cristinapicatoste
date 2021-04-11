import React from 'react';
import './PortfolioItem.scss';

const PortfolioItem = ({ project, subtitle, description, year, tech, image }) => {
    return (
        <div className="item-wrap">
            <div className="item-pic">
                <div className="item-img-wrap">
                    <div style={{ backgroundImage: `url(${image})` }} className="item-img fadeInRight"></div>
                </div>
                <div className="item-back fadeInLeft"></div>
            </div>
            <div className="item-text fadeInUp">
                <h4>{project}</h4>
                <p className="item-description">{description}</p>
                <p className="item-year-tech">{tech}</p>
            </div>
        </div>
    )
}

export default PortfolioItem
