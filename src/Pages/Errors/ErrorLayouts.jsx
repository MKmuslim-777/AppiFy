import React from 'react';
import Navbar from '../../Components/Navbar';
import RouteError from './RouteError';
import Footer from '../../Components/Footer';

const ErrorLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <RouteError></RouteError>
            <Footer></Footer>
        </div>
    );
};

export default ErrorLayouts;