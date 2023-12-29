import React from 'react';
import style from './AccountCard.module.css';
import EAImage from '../../../Images/Common/Accounts/ea.png';
import mockupImage from '../../../Images/Common/Accounts/bee-maw-splash-vertical.jpg';
import mockupElo from '../../../Images/Common/Accounts/unranked.png';
import { Link } from 'react-router-dom';
import AddToCartIcon from '../../../Images/Common/Icons/AddToCartIcon';

const AccountCard = () => {
  return (
    <>
      <div className={style.card}>
        <div className={style.left}>
          <div className={style.imageContainer}>
            <img className={style.image} src={mockupImage} alt='Nome Campeão' />
          </div>
        </div>

        <div className={style.right}>
          <div>
            <div className={style.rightTop}>
              <div className={style.infoContainer}>
                <p className={style.label}>NÍVEL</p>
                <div className={style.infoContent}>
                  <p>30</p>
                </div>
              </div>
              <div className={style.infoContainer}>
                <p className={style.label}>EA</p>
                <div className={style.infoContent}>
                  <img src={EAImage} alt='Essência azul' />
                  <p>140.000</p>
                </div>
              </div>
            </div>

            <div className={style.rightMiddle}>
              <div className={style.infoContainer}>
                <p className={style.label}>ELO</p>
                <div className={style.infoContent}>
                  <p>Unranked</p>
                  <img
                    className={style.elo}
                    src={mockupElo}
                    alt='Elo Unranked'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={style.rightBottom}>
            <Link className={style.detailsButton}>Ver detalhes</Link>
            <button className={style.addToCartButton}>
              <AddToCartIcon />
              <p>Adicionar</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCard;
