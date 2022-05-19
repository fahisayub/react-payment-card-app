import React from 'react';
import Date from '../components/Date'
import CaseStudybtn from './CaseStudybtn';
import Device from './Device';
import Heading from './Heading';
import Logo from './Logo';
import MoreIcon from './MoreIcon';
import style from '../styles/PaymentCard.module.css'
const PaymentCard = ({heading,subheading,device,date,logo,bgcolor}) => {
   
    return (
        
        <div style={{backgroundColor:bgcolor}} className={style.card}>
            <div className={style.leftcontainer}>
                <Date date={date}/>
                <CaseStudybtn/>
                <Heading heading={heading}/>
                <Heading heading={subheading}/>
                <Device device={device}/>
            </div>
            <div className={style.rightcontainer}>
                <Logo logo={logo}/>
                <MoreIcon/>
            </div>
            
        </div>
    );
};

export default PaymentCard;