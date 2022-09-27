import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        console.log('product load before fetch')
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log('product loaded')
            })
    }, [])
    useEffect(() => {
        console.log('local storage call', products)
        const storedCart = getStoredCart();
        const savedCart = [];
        // console.log(storedCart)
        for (const id in storedCart) {
            // console.log(id)
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)

                console.log(addedProduct)
            }
            console.log('local storage')
        }
        setCart(savedCart)
    }, [products])
    const addToCart = (selectedProduct) => {
        const exist = cart.find(product => product.id === selectedProduct.id)
        let newCart = []
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        // console.log(product)
        //cart.push(product) do not use this method in react
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>


            </div>
        </div>
    );
};

export default Shop;