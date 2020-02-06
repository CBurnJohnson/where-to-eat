import React, { useEffect, useContext } from 'react';

import Restaurant from '../restaurants/Restaurant';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Home = () => {
    const restaurantContext = useContext(RestaurantContext);

    useEffect(() => {
        restaurantContext.getRestaurants();
    }, []);

    return (
        <div className='container'>
            <Restaurant />
        </div>
    );
};

export default Home;
