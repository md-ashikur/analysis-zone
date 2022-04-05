import React from 'react';
import useCart from '../hooks/useCart';
import laptop from '../../image/laptop.png';
import Cart from '../cart/Cart';
import './Home.css';
const Home = () => {
    const [cart, setCart] = useCart();
    return (
        <div className="text-center">
            <div className='header container'>
            <div className='row mt-4'>
            <div className='col-lg-6 text-left'>
                <h1>your Next Laptop</h1>
                <h1 className='title2'>Best Experience</h1>
                <p>HP known as Hewlett-Packard is one of the oldest electronics brands that is not as popular as it used to be. When it comes to desktops, they still provide the most reliable machines and are widely used by gamers and professionals.</p>
            </div>
            <div className='col-lg-6'>
                <img src={laptop} alt="" className='img-fluid'/>
            </div>
            </div>
            
        </div>
        <div className="mt-5">
            <h2>review</h2>
            <div className='review-in-home'>
            {
                cart.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
            </div>
        </div>
        </div>
    );
};

export default Home;