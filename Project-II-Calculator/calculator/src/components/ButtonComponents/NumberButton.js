import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className="numButt">
        {props.text}
        </button>
    )
}

export default NumberButton;