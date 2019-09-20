import React from 'react';
import './styles/Total.css';

const Total = ({title, sign,totalNum, color}) => {
    return (
        <div className="totalBox" style={{backgroundColor: `${color}`}}>
            <div>{ title }</div>
            <div>{ sign } { totalNum }</div>
        </div>
    )
}

export default Total;