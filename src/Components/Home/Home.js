import React from 'react';
import './laptop-png-6778.png'
const Home = () => {
    return (
        <div className='header container'>
            <div className='row mt-4'>
            <div className='col-lg-6 text-left'>
                <h1>your Next Laptop</h1>
                <h1 className='title2'>Best Experience</h1>
                <p>HP known as Hewlett-Packard is one of the oldest electronics brands that is not as popular as it used to be. When it comes to desktops, they still provide the most reliable machines and are widely used by gamers and professionals.</p>
            </div>
            <div className='col-lg-6'>
                <img src='./laptop-png-6778.png' alt="" width={200}/>
            </div>
            </div>
        </div>
    );
};

export default Home;