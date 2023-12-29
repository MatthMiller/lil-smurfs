import React from 'react';
import style from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import CartIcon from '../../../Images/Common/Icons/CartIcon';
import logoIcon from '../../../Images/Common/logo-amarela-icon.png';
import logoText from '../../../Images/Common/logo-amarela-texto.png';

const Header = ({ setIsCartOpen }) => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  return (
    <>
      <header className={style.header}>
        <div className='g-header-wrapper'>
          <div className={style.container + ' g-container'}>
            <Link to='/' className={style.logoContainer}>
              <img
                src={logoIcon}
                alt='Ícone LilSmurfs'
                className={style.icon}
              />
              <img
                height={'32'}
                width={'157'}
                src={logoText}
                alt='LilSmurfs'
                className={style.text}
              />
            </Link>

            <nav className={style.middle}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : style.link
                }
                to={'/'}
                end
              >
                <p>Início</p>
              </NavLink>
              <div className={style.dropDownContainer}>
                <p>Contas</p>
                <DropdownIcon />

                <div className={style.dropDownContent}>
                  <div className={style.dropDownLinks}>
                    <Link className={style.dropDownLink} to={'/contas-skin'}>
                      Contas por skin
                    </Link>
                    <Link
                      className={style.dropDownLink}
                      to={'/contas-aleatorias'}
                    >
                      Contas aleatórias
                    </Link>
                  </div>
                </div>
              </div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : style.link
                }
                to={'/scripts'}
              >
                <p>Scripts</p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : style.link
                }
                to={'/roleta'}
              >
                <p>Roleta</p>
              </NavLink>
            </nav>

            <nav className={style.right}>
              <div className={style.cartSide}>
                <p className={style.price}>
                  R$ 18<span className={style.priceDecimal}>,00</span>
                </p>
                <div
                  onClick={() => setIsCartOpen(true)}
                  className={style.cartIconContainer}
                >
                  <CartIcon />
                </div>
              </div>

              <Link className={style.userAreaButton} to={'/login'}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='current'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z'
                    fill='#F6F2FF'
                  />
                </svg>
                Área do usuário
              </Link>

              <div
                onClick={() => {
                  setMenuMobile(!menuMobile);
                }}
                className={style.menuButton}
              >
                <MenuButtonIcon />
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className={style.stickyCompensation}></div>
    </>
  );
};

const DropdownIcon = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.83332 8.33331L14.1667 8.33331L9.99999 12.5L5.83332 8.33331Z'
        fill='#A098B1'
      />
    </svg>
  );
};

const MenuButtonIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z'
        fill='#F6F2FF'
      />
    </svg>
  );
};

export default Header;
