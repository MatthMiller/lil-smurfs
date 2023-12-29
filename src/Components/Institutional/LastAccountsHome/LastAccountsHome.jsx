import React from 'react';
import style from './LastAccountsHome.module.css';
import AccountCard from '../AccountCard/AccountCard';

const LastAccountsHome = () => {
  return (
    <>
      <section className={style.section + ' g-wrapper'}>
        <div className='g-container'>
          <div className={style.titlesContainer}>
            <h3 className={style.title}>
              Últimas contas <span>adicionadas</span>
            </h3>
            <p className={style.subtitle}>
              Explore as contas mais recentes em nosso acervo.
            </p>
          </div>

          <div className={style.cardsContainer}>
            <AccountCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default LastAccountsHome;
