import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;