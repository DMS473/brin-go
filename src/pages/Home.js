import React from 'react';
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    
    <div className="">
        <Header />
        <Container>
          {/* <h2>Home</h2>
          <p>Selamat datang di halaman Home!</p> */}
        </Container>
        <Outlet />
    </div>
  );
};

export default Home;
