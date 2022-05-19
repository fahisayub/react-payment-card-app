import React from 'react';
import style from '../styles/Date.module.css';
const Date = ({date}) => {
    return (
        <div>
            <p className={style.date}>{date}</p>
        </div>
    );
};

export default Date;