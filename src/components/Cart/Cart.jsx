import React from 'react';

const Cart = ({cart, removeCart}) => {
    return (
        <div>
            <h2>Order Summary {cart.length}</h2>
            {
                cart.map(cart=> <p key={cart._id}>{cart.name} <button onClick={()=>removeCart(cart._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Cart;