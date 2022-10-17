
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bannerImage'>
            <div className="bannerText">
            <h1>Welcome to <br />
            The Intel Code Zone</h1>
            <p className='text-uppercase mt-3 mb-0 fw-bold fs-5 sprit'>Let's find your spirit.</p>
            <p className='mt-3'><span className='backQuote'>“</span> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.<span className='backQuote'>”</span> – Martin Fowler
            </p>
            
            </div>
        </div>
    );
};

export default Banner;