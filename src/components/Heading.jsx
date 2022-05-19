import React from 'react';
import style from '../styles/Heading.module.css'

const Heading = ({heading}) => {
    return (
        <div>
            <h1 className={style.heading}>{heading}</h1>
        </div>
    );
};

export default Heading;