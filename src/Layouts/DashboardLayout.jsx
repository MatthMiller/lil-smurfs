import React from 'react';
import AsideNav from '../Components/Dashboard/AsideNav/AsideNav';
import DashboardWrapper from '../Components/Dashboard/DashboardWrapper/DashboardWrapper';

const DashboardLayout = ({ children }) => {
  React.useEffect(() => {
    import('./DashboardNoFooter.css');
  }, []);

  return (
    <DashboardWrapper>
      <AsideNav />
      {children}
    </DashboardWrapper>
  );
};

export default DashboardLayout;
