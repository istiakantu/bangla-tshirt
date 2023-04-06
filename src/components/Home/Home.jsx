import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tShirts = useLoaderData()

    const [cart, setCart] = useState([]);

    const handelAddToCart = tShirt => {
        const exist = cart.find(ts => ts._id === tShirt._id)
        if (exist) {
            toast('You Already Added This')
        }
        else {
            const added = [...cart, tShirt];
            setCart(added);
        }
    }

    const removeCart = id => {
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className="t-shirts-container">
                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handelAddToCart={handelAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    removeCart={removeCart}
                ></Cart>
            </div>
        </div>

    );
};

export default Home;