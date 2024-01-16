import React from 'react';

import SocialMedia from './commons/social-media';
import Footer from './layout/Footer';
import Header from './layout/Header';

type props = { children: any };

const Layout = ({ children }: props) => {
  return (
    <div className="relative bg-yellow-50">
      <Header />
      {children}
      <div className="fixed bottom-0 right-0 flex items-center justify-end w-full z-100 ">
        <SocialMedia />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
