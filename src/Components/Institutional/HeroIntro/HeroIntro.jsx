import React from 'react';
import style from './HeroIntro.module.css';
import bgImage from '../../../Images/HomePage/hero-bg.jpg';

const HeroIntro = () => {
  return (
    <>
      <section className={style.hero}>
        <div className='g-wrapper'>
          <div className='g-container'></div>
        </div>

        <div className={style.bgContainer}>
          <div className={style.bgShadow}></div>
          <img className={style.bgImage} src={bgImage} alt='' />
        </div>
      </section>
    </>
  );
};

export default HeroIntro;
