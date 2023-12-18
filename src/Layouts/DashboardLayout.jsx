import React from 'react';
import AsideNav from '../Components/Dashboard/AsideNav/AsideNav';
import DashboardWrapper from '../Components/Dashboard/DashboardWrapper/DashboardWrapper';
import './DashboardNoFooter.css';

const DashboardLayout = ({ children }) => {
  return (
    <DashboardWrapper>
      <AsideNav />
      {children}
    </DashboardWrapper>
  );
};

export default DashboardLayout;
