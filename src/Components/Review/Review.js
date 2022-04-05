import React from 'react';
import './Review.css';
import Cart from '../cart/Cart';
import useCart from '../hooks/useCart';
const Review = () => {
    const [cart, setCart] = useCart();
    return (
        
        <div className='text-center mt-5'>
            <h1 className='mb-5'>What our customers say!</h1>
            <div className='review-box'>
            <div className='carts'>
            {
                cart.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
            </div>
            </div>
        </div>
    );
};

export default Review;