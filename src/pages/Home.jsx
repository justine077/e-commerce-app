import React from 'react';
import Category from '../components/Homecom/Category';
import Newarrivals from '../components/Homecom/Newarrivals';
import TrendProd from '../components/Homecom/TrendProd';

const Home = () => {
  return (
    <div>
      <Newarrivals />
      <Category />
      <TrendProd />
    </div>
  )
}

export default Home
