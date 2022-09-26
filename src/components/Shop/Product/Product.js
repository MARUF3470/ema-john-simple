import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product
    const { addToCart } = props;

    return (
        <div className='product-style'>
            <img src={img} alt="No image Found" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => addToCart(props.product)}>
                <p>Add To Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>
        </div>
    );
};

export default Product;