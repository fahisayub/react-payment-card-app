import React from 'react';
import style from '../styles/Logo.module.css';
const Logo = ({logo}) => {
    return (
        <div className={style.logo}>
            {logo}
        </div>
    );
};

export default Logo;