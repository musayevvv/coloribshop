import React from 'react';
import Header from '../header/header';
import Layout from '../layout/Layout';
import Product from '../ourproduct/Product';
import Featured from '../featured/Featured';
import Leader from '../leader/Leader';
import Services from '../services/Services';
import Form from '../form/Form';
import Footer from '../footer/Footer';


const Home = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Product />
        <Featured />
        <Leader />
        <Services />
        <Form />
      </Layout>
      <Footer/>
    </div>
  );
};

export default Home;
