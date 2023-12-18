import React from 'react';
import style from './DashboardWrapper.module.css';

const DashboardWrapper = ({ children }) => {
  return (
    <>
      <div className={style.wrapper}>{children}</div>
    </>
  );
};

export default DashboardWrapper;
