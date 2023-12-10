import React from 'react';
import style from './InternalPageBanner.module.css';

const InternalPageBanner = ({ titleWhite, titleYellow, image }) => {
  return (
    <>
      <section className={style.geralWrapper}>
        <div className='g-wrapper'>
          <div className='g-container'>
            <div className={style.titleContainer}>
              <h2 className={style.title}>
                {titleYellow}{' '}
                <span className={style.whiteTitle}>{titleWhite}</span>
              </h2>
            </div>
          </div>
        </div>

        <div className={style.bgContainer}>
          <div className={style.bgShadow}></div>
          <img
            className={style.bgImage}
            src={image}
            alt={'Banner ' + titleYellow + titleWhite}
          />
        </div>
      </section>
    </>
  );
};

export default InternalPageBanner;
