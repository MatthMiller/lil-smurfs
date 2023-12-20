import React from 'react';
import style from './AsideNav.module.css';
import { Link, NavLink } from 'react-router-dom';
import CloseIcon from '../../../Images/Common/Icons/CloseIcon';

const AsideNav = () => {
  // if props 'user' carregar a navegação pra admin
  // e seus componentes/links/icons
  // if props 'admin' carregar a navegação pra admin
  // e seus componentes/links/icons

  const [menuMobile, setMenuMobile] = React.useState(false);

  return (
    <>
      <div className={style.stickyCompensation}></div>
      <header
        className={
          menuMobile
            ? `${style.mobileHeader} ${style.activeMenu}`
            : style.mobileHeader
        }
      >
        <div className={style.mobileHeaderTop}>
          <h1 className={style.logo}>LOGO</h1>
          <div
            onClick={() => setMenuMobile(!menuMobile)}
            className={style.menuButton}
          >
            {menuMobile ? <CloseIcon /> : <MenuButtonIcon />}
          </div>
        </div>

        {menuMobile ? (
          <div className={style.entryOpacity}>
            <div className={style.divisor}></div>
            <h4 className={style.labelTitle}>ÁREA DO USUÁRIO</h4>
            <h3 className={style.title}>Painel de controle</h3>

            <div className={style.mobileContentContainer}>
              <nav className={style.pages}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${style.pageButton} ${style.active}`
                      : style.pageButton
                  }
                  to={'/dashboard-user/meus-pedidos'}
                >
                  <PedidosIcon />
                  <p>Meus pedidos</p>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${style.pageButton} ${style.active}`
                      : style.pageButton
                  }
                  to={'/dashboard-user/roleta'}
                >
                  <PremiosIcon />
                  <p>Prêmios</p>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${style.pageButton} ${style.active}`
                      : style.pageButton
                  }
                  to={'/dashboard-user/meu-perfil'}
                >
                  <MeuPerfilIcon />
                  <p>Meu perfil</p>
                </NavLink>
              </nav>

              <Link to='/' className={style.backToStoreButton}>
                Voltar à loja
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <div className={style.asideContainer}>
        <aside className={style.aside}>
          <div>
            <div className={style.top}>
              <h1 className={style.logo}>LOGO</h1>
              <div className={style.divisor}></div>
              <h4 className={style.labelTitle}>ÁREA DO USUÁRIO</h4>
              <h3 className={style.title}>Painel de controle</h3>
            </div>

            <nav className={style.pages}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${style.pageButton} ${style.active}`
                    : style.pageButton
                }
                to={'/dashboard-user/meus-pedidos'}
              >
                <PedidosIcon />
                <p>Meus pedidos</p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${style.pageButton} ${style.active}`
                    : style.pageButton
                }
                to={'/dashboard-user/roleta'}
              >
                <PremiosIcon />
                <p>Prêmios</p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${style.pageButton} ${style.active}`
                    : style.pageButton
                }
                to={'/dashboard-user/meu-perfil'}
              >
                <MeuPerfilIcon />
                <p>Meu perfil</p>
              </NavLink>
            </nav>
          </div>

          <Link to='/' className={style.backToStoreButton}>
            Voltar à loja
          </Link>
        </aside>
      </div>
    </>
  );
};

const PremiosIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 21V19H11V15.9C10.1833 15.7167 9.45417 15.3708 8.8125 14.8625C8.17083 14.3542 7.7 13.7167 7.4 12.95C6.15 12.8 5.10417 12.2542 4.2625 11.3125C3.42083 10.3708 3 9.26667 3 8V7C3 6.45 3.19583 5.97917 3.5875 5.5875C3.97917 5.19583 4.45 5 5 5H7V3H17V5H19C19.55 5 20.0208 5.19583 20.4125 5.5875C20.8042 5.97917 21 6.45 21 7V8C21 9.26667 20.5792 10.3708 19.7375 11.3125C18.8958 12.2542 17.85 12.8 16.6 12.95C16.3 13.7167 15.8292 14.3542 15.1875 14.8625C14.5458 15.3708 13.8167 15.7167 13 15.9V19H17V21H7ZM7 10.8V7H5V8C5 8.63333 5.18333 9.20417 5.55 9.7125C5.91667 10.2208 6.4 10.5833 7 10.8ZM12 14C12.8333 14 13.5417 13.7083 14.125 13.125C14.7083 12.5417 15 11.8333 15 11V5H9V11C9 11.8333 9.29167 12.5417 9.875 13.125C10.4583 13.7083 11.1667 14 12 14ZM17 10.8C17.6 10.5833 18.0833 10.2208 18.45 9.7125C18.8167 9.20417 19 8.63333 19 8V7H17V10.8Z'
        fill='#A098B1'
      />
    </svg>
  );
};

const PedidosIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 22C6.45 22 5.97917 21.8042 5.5875 21.4125C5.19583 21.0208 5 20.55 5 20C5 19.45 5.19583 18.9792 5.5875 18.5875C5.97917 18.1958 6.45 18 7 18C7.55 18 8.02083 18.1958 8.4125 18.5875C8.80417 18.9792 9 19.45 9 20C9 20.55 8.80417 21.0208 8.4125 21.4125C8.02083 21.8042 7.55 22 7 22ZM17 22C16.45 22 15.9792 21.8042 15.5875 21.4125C15.1958 21.0208 15 20.55 15 20C15 19.45 15.1958 18.9792 15.5875 18.5875C15.9792 18.1958 16.45 18 17 18C17.55 18 18.0208 18.1958 18.4125 18.5875C18.8042 18.9792 19 19.45 19 20C19 20.55 18.8042 21.0208 18.4125 21.4125C18.0208 21.8042 17.55 22 17 22ZM6.15 6L8.55 11H15.55L18.3 6H6.15ZM5.2 4H19.95C20.3333 4 20.625 4.17083 20.825 4.5125C21.025 4.85417 21.0333 5.2 20.85 5.55L17.3 11.95C17.1167 12.2833 16.8708 12.5417 16.5625 12.725C16.2542 12.9083 15.9167 13 15.55 13H8.1L7 15H19V17H7C6.25 17 5.68333 16.6708 5.3 16.0125C4.91667 15.3542 4.9 14.7 5.25 14.05L6.6 11.6L3 4H1V2H4.25L5.2 4Z'
        fill='#A098B1'
      />
    </svg>
  );
};

const MeuPerfilIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z'
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

export default AsideNav;
