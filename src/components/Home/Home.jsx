import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData()

    const [cart, setCart]= useState([]);

    const handelAddToCart = tShirt => {
        console.log(tShirt)
    }
    
    return (
        <div className='home-container'>
            <div className="t-shirts-container">
                {
                    tShirts.map(tShirt=><Tshirt
                    key={tShirt._id}
                    tShirt={tShirt}
                    handelAddToCart={handelAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
        
    );
};

export default Home;