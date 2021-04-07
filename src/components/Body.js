import React from 'react';
import HotelInfo from './HotelInfo.js';
import Welcome from './Welcome.js';

const Body = () => {
  return (
    <main id="wrapper">
      <Welcome />
      <HotelInfo />
    </main>
  );
}

export default Body;