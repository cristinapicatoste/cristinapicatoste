import React from 'react';
import './PortfolioItem.scss';

const PortfolioItem = ({ project, subtitle, description, year, tech, image }) => {
    return (
        <div className="item-wrap">
            <div className="item-pic">
                {/* <div className="item-marc"> */}
                <div style={{ backgroundImage: `url(${image})` }} className="item-img"></div>
                {/* </div> */}
                <div className="item-back"></div>
            </div>
            <div className="item-text">
                <h4>{project}</h4>
                <p className="item-description">{description}</p>
                {/* <p>{description}</p> */}
                {/* <p className="item-year-tech">{year}</p> */}
                <p className="item-year-tech">{tech}</p>
            </div>
        </div>
    )
}

export default PortfolioItem
