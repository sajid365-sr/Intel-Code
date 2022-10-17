


import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Option.css'

const Option = ({singleOption}) => {

    const correctAns = (e) =>{
       e.target.style.color = 'orangered'
       
    }

    console.log(singleOption)
    return (
        <div className='option-container'>
            <FontAwesomeIcon className='circle' onClick={correctAns} icon={faCircleDot}></FontAwesomeIcon>
            <p>{singleOption}</p>
        </div>
    );
};

export default Option;