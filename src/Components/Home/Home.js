import React from 'react';
import useCart from '../hooks/useCart';
import laptop from '../../image/laptop.png';
import Cart from '../cart/Cart';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    const [cart, setCart] = useCart();
    const carts = cart.slice(0, 3);
    return (
        <div>
            <div className='header container'>
            <div className='row mt-4'>
            <div className='col-lg-6 text-left'>
                <h1>Your Next Laptop</h1>
                <h1 className='title2'>Best Experience</h1>
                <p>HP known as Hewlett-Packard is one of the oldest electronics brands that is not as popular as it used to be. When it comes to desktops, they still provide the most reliable machines and are widely used by gamers and professionals.</p>
                <button className='px-5 py-2 live-btn'>Live demo</button>
            </div>
            <div className='col-lg-6'>
                <img src={laptop} alt="" className='img-fluid'/>
            </div>
            </div>
            
        </div>
        <div className="mt-5 text-center">
            <h2>Customer Reviews(3)</h2>
            <div className='review-in-home'>
            {
                carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
            </div>
            <Link to='/review'><button className='live-btn px-5 py-2 mb-5'>See All Reviews</button></Link>
        </div>
        </div>
    );
};

export default Home;