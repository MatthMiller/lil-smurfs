import React from 'react';
import style from './HeroIntro.module.css';
import bgImage from '../../../Images/HomePage/hero-bg.jpg';
import { Link } from 'react-router-dom';

const HeroIntro = () => {
  return (
    <>
      <section className={style.hero}>
        <div className={style.wrapper + ' g-wrapper'}>
          <div className={style.container + ' g-container'}>
            <h1 className={style.title}>
              Adquira sua <span className={style.italic}>Conta Smurf</span> de
              League of Legends
            </h1>
            <p className={style.subtitle}>com suas skins favoritas!</p>

            <Link className={style.button} to='/skins'>
              <p>Conferir contas disponíveis</p>
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className={style.bgContainer}>
          <div className={style.bgShadow}></div>
          <img className={style.bgImage} src={bgImage} alt='' />
        </div>

        <div className={style.portal}></div>
      </section>
    </>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      width='19'
      height='10'
      viewBox='0 0 19 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.5 9.5L13.075 8.1L15.175 6H0V4H15.175L13.1 1.9L14.525 0.5L19 5L14.5 9.5Z'
        fill='#F6F2FF'
      />
    </svg>
  );
};

export default HeroIntro;
