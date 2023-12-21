import React from 'react';
import Footer from '../Components/Institutional/Footer/Footer';

const LoginLayout = ({ children }) => {
  return (
    <>
      {children}
      <div className='content-flex-1'></div>
      <Footer />
    </>
  );
};

export default LoginLayout;
