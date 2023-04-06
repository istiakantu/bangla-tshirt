import React from 'react';
import './Tshirt.css'

const Tshirt = ({tShirt,handelAddToCart}) => {
    const {_id, picture, name, price, gender}= tShirt;
    return (
        <div className='t-shirt-container'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <button onClick={()=>handelAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;