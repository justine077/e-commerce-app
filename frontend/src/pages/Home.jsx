import React from 'react';
import Category from '../components/Homecom/Category';
import Newarrivals from '../components/Homecom/Newarrivals';
import TrendProd from '../components/Homecom/TrendProd';
import Hero from '../components/Hero/Hero'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Newarrivals />
      <Category />
      <TrendProd />
    </div>
  )
}

export default Home
