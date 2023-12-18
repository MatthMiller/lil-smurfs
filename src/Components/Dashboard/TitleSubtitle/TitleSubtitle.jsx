import React from 'react';
import style from './TitleSubtitle.module.css';

const TitleSubtitle = ({ title, subtitle }) => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>{title}</h1>
        <h3 className={style.subtitle}>{subtitle}</h3>
      </div>
    </>
  );
};

export default TitleSubtitle;
