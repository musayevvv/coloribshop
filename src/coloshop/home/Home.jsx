import React from 'react';
import Header from '../header/Header';
import Layout from '../layout/Layout';
import Products from '../products/Product';
import Deal from '../deal/Deal';
import Best from '../best/best'
import Long from '../long/Long'

const Home = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Products />
        <Deal/>
        <Best/>
        <Long/>
      </Layout>
    </div>
  );
};

export default Home;
