import React from 'react';
import Header from '../Components/Institutional/Header/Header';
import Footer from '../Components/Institutional/Footer/Footer';

const InstitutionalHomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className='content-flex-1'></div>
      <Footer />
    </>
  );
};

export default InstitutionalHomeLayout;
