import React from 'react';
import { useHistory } from 'react-router';
import classes from '../../styles/insurance.module.css';
import {InsuranceData} from './InsuranceData';

const Insurance = () => {
    const history = useHistory();
    const handleBuyBtn = () => {
        history.push('getAQuote');
    }
    const cards = InsuranceData.map((item)=>{
        return(
            <div className={classes.cards}>
                <div className={classes.cards1}>
                    <i class={item.class}></i>
                    <p>{item.p1}</p>
                </div>
                <div className={classes.cards2}>
                    <p>{item.p2}</p>
                    <button className={classes.buyBtn} onClick={handleBuyBtn}>Buy Plan</button>
                </div>
            </div>           
        )
    })
    return (
        <div className={classes.container}>
            <h2>Get Insured easily with us</h2>  
            <div className={classes.subContainer}>
                {cards}
            </div>
        </div>
    )
}

export default Insurance
