import React from 'react';
import style from '../styles/Device.module.css';

const Device = ({device}) => {
    return (
        <div>
            <h3 className={style.device}>{device}</h3>
        </div>
    );
};

export default Device;