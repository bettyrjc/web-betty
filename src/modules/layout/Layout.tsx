import React from 'react';

import SocialMedia from '../shared/social-media';
import Footer from './Footer';
import Header from './Header';

type props = { children: any };

const Layout = ({ children }: props) => {
  return (
    <div className="flex items-center justify-center bg-yellow-50">
      <div
        className="relative h-full bg-yellow-50"
        style={{
          maxWidth: '1600px',
          minWidth: '320px',
        }}
      >
        <Header />
        {children}
        <div className="fixed bottom-0 right-0 flex items-center justify-end w-full z-100 ">
          <SocialMedia />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
