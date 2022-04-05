
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {name, img, comment} = props.cart;
    return (
       
            <div className='review-cart '>
            <img src={img} alt=""/>
            <h4>{name}</h4>
            <p>{comment}</p>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          
        </div>
       
    );
};

export default Cart;