import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData()
    return (
        <div>
            <h2>This is Home: {tShirts.length}</h2>
        </div>
    );
};

export default Home;