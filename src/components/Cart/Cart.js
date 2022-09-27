import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }
    const tex = total * 0.1
    const gTotal = total + shipping + tex
    return (
        <div className='position'>
            <h3>Order Summary</h3>
            <p>Select Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Text: ${tex.toFixed(2)} </p>
            <h3>Grang Total: ${gTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;