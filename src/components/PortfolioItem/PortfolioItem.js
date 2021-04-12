import React from 'react';
import { Link } from "react-router-dom";

import { Button } from '../Button/Button';


import './PortfolioItem.scss';

const PortfolioItem = ({ project, title, subtitle, description, year, tech, image }) => {
    return (
        <div className="item-wrap">
            <div className="item-pic">
                <div className="item-img-wrap">
                    <div style={{ backgroundImage: `url(/images/${image})` }} className="item-img fadeInRight"></div>
                </div>
                <div className="item-back fadeInLeft"></div>
            </div>
            <div className="item-text fadeInUp">
                {/* <Link to={} component={} */}
                <h4>{title}</h4>
                <p className="item-description">{description}</p>
                <p className="item-year-tech">{tech}</p>
                <div className="item-demo">
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `${project.url}`;
                    }}
                        variant="pink-or" size="200px">
                        Live demo
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem
