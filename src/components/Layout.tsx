import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';

type props = { children: any };

const Layout = ({ children }: props) => {
  return (
    <div className=" bg-yellow-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
