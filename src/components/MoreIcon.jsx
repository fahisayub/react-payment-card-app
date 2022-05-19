import React from 'react';
import style from '../styles/more.module.css'
const MoreIcon = () => {
    return (
        <div className={style.more}>
            
            <a href="https://reactjs.org"><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
        </div>
    );
};

export default MoreIcon;
