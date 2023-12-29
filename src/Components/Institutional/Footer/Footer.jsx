import React from 'react';
import style from './Footer.module.css';
import logo from '../../../Images/Common/logo-amarela-icon.png';

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={'g-wrapper'}>
          <div className={'g-container'}>
            <div className={style.wrapper}>
              <div className={style.logoContainer}>
                <img
                  src={logo}
                  alt='Logo Lil Smurfs'
                  height={'80'}
                  width={'64'}
                />
              </div>

              <ul className={style.iconList}>
                <a className={style.iconContainer} href='/'>
                  <li>
                    <YouTubeIcon />
                  </li>
                </a>
                <a className={style.iconContainer} href='/'>
                  <li>
                    <InstagramIcon />
                  </li>
                </a>
                <a className={style.iconContainer} href='/'>
                  <li>
                    <TiktokIcon />
                  </li>
                </a>
                <a className={style.iconContainer} href='/'>
                  <li>
                    <XIcon />
                  </li>
                </a>
              </ul>
              <p className={style.copytext}>
                Esse site NÃO é afiliado, patrocinado, endossado ou associado a
                League of Legends ou Riot Games, Inc.© Todos os direitos
                autorais, marcas registradas, imagens e marcas de serviço
                pertencem aos seus respectivos proprietários.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const YouTubeIcon = () => {
  return (
    <svg
      width='22'
      height='16'
      viewBox='0 0 22 16'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.9001 7.68204C21.9001 7.68204 21.9002 11.2472 21.4333 12.9873C21.1786 13.921 20.4571 14.685 19.4809 14.9396C17.7833 15.4065 10.9501 15.4065 10.9501 15.4065C10.9501 15.4065 4.11689 15.4065 2.4192 14.9396C1.48547 14.685 0.721513 13.921 0.46686 12.9873C-3.89581e-06 11.2472 0 7.68204 0 7.68204C0 7.68204 -3.89581e-06 4.1169 0.46686 2.37678C0.721513 1.44305 1.48547 0.679074 2.4192 0.424422C4.11689 0 10.9501 0 10.9501 0C10.9501 0 17.7833 0 19.4809 0.424422C20.4571 0.679074 21.1786 1.44305 21.4333 2.37678C21.9002 4.1169 21.9001 7.68204 21.9001 7.68204ZM14.4303 7.68204L8.70064 4.41399V10.9501L14.4303 7.68204Z'
        fill='#F6F2FF'
      />
    </svg>
  );
};

const TiktokIcon = () => {
  return (
    <svg
      width='19'
      height='21'
      viewBox='0 0 19 21'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.325 5.12262C18.325 5.02599 18.3009 5.00182 18.2042 5.02598C17.9626 5.02598 17.7452 4.97766 17.5036 4.9535C16.658 4.83271 13.8797 3.38314 13.4206 0.991341C13.3965 0.943022 13.2998 0.363192 13.2998 0.121597C13.2998 0.000798923 13.2998 0.000798919 13.179 0.000798919C13.1629 0.000798919 13.1388 0.000798919 13.1066 0.000798919C12.0274 0.000798919 10.9483 0.000798919 9.86918 0.000798919C9.65174 0.000798919 9.67589 -0.0233636 9.67589 0.194072C9.67589 4.88102 9.67589 9.57603 9.67589 14.2791C9.67589 14.4482 9.67589 14.6173 9.65173 14.8106C9.48262 15.7045 9.02359 16.4293 8.22632 16.9125C7.54986 17.3232 6.80091 17.444 6.00365 17.299C5.76205 17.2507 5.54461 17.1541 5.30302 17.0574C5.28691 17.0413 5.27081 17.0252 5.2547 17.0091C5.15806 16.9366 5.08558 16.8883 4.98895 16.8158C3.9984 16.1394 3.51521 15.173 3.66017 13.965C3.80513 12.7329 4.50575 11.9115 5.66541 11.4766C6.01975 11.3477 6.38214 11.2994 6.75259 11.3316C6.99418 11.3316 7.23579 11.3558 7.45322 11.4283C7.53375 11.4605 7.57402 11.4283 7.57402 11.3316C7.57402 11.3155 7.57402 11.2914 7.57402 11.2591C7.57402 10.4136 7.54986 8.57743 7.54986 8.55327C7.54986 8.31168 7.54986 8.07008 7.54986 7.82849C7.54986 7.75601 7.5257 7.75601 7.45322 7.75601C7.01835 7.69159 6.58347 7.67548 6.1486 7.70769C5.53656 7.75601 4.94868 7.88486 4.38496 8.09424C3.4669 8.41637 2.66158 8.91567 1.969 9.59214C1.38917 10.1881 0.922094 10.8645 0.567754 11.6215C0.245626 12.3463 0.0603988 13.1033 0.0120798 13.8925C-0.00402659 14.2308 -0.00402659 14.5771 0.0120798 14.9314C0.0603988 15.3985 0.15704 15.8656 0.301997 16.3326C0.712709 17.6373 1.48581 18.7003 2.54883 19.57C2.66963 19.6425 2.76627 19.7391 2.88706 19.7875C2.95149 19.8358 3.00786 19.8922 3.05618 19.9566C3.23335 20.0854 3.41857 20.1982 3.61185 20.2948C4.81983 20.8746 6.07613 21.1162 7.42906 20.9471C9.16855 20.7538 10.594 19.9807 11.7295 18.652C12.8166 17.3957 13.324 15.9461 13.3481 14.3032C13.3481 11.9598 13.3481 9.64046 13.3481 7.29698C13.3481 7.2245 13.324 7.15202 13.3723 7.12786C13.4206 7.1037 13.4689 7.17618 13.5173 7.20034C14.387 7.78017 15.3292 8.19088 16.3439 8.40832C16.9238 8.55327 17.5277 8.62576 18.1317 8.62576C18.325 8.62576 18.3492 8.62575 18.3492 8.43248C18.3492 7.61105 18.325 5.34006 18.325 5.12262Z'
        fill='#F6F2FF'
      />
    </svg>
  );
};

const InstagramIcon = () => {
  return (
    <svg
      width='22'
      height='21'
      viewBox='0 0 22 21'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.8537 0.046566C15.9712 0.0931292 16.7627 0.279382 17.4146 0.512198C18.1131 0.791577 18.7184 1.16407 19.2772 1.7694C19.8825 2.32815 20.2084 2.93348 20.4878 3.63192C20.7672 4.28381 20.9534 5.02882 21 6.14633C21.0466 7.26385 21.0466 7.63636 21.0466 10.4767C21.0466 13.3636 21.0466 13.7361 21 14.8537C20.9534 15.9712 20.7672 16.7162 20.4878 17.3681C20.2084 18.0665 19.8825 18.6718 19.2772 19.2306C18.7184 19.8359 18.1131 20.2084 17.4146 20.4878C16.7627 20.7206 15.9712 20.9069 14.8537 20.9534C13.7361 21 13.3636 21 10.5233 21C7.68292 21 7.31042 21 6.1929 20.9534C5.07539 20.9069 4.33038 20.7206 3.63193 20.4878C2.93348 20.2084 2.37472 19.8359 1.7694 19.2306C1.21064 18.6718 0.838136 18.0665 0.558757 17.3681C0.279378 16.7162 0.139688 15.9712 0.0931249 14.8537C-1.42238e-06 13.7361 0 13.3636 0 10.4767C0 7.63636 -1.42238e-06 7.26385 0.0931249 6.14633C0.139688 5.02882 0.279378 4.28381 0.558757 3.63192C0.838136 2.93348 1.21064 2.32815 1.7694 1.7694C2.37472 1.16407 2.93348 0.791577 3.63193 0.512198C4.33038 0.279382 5.07539 0.0931292 6.1929 0.046566C7.31042 2.8413e-06 7.68292 0 10.5233 0C13.3636 0 13.7361 2.8413e-06 14.8537 0.046566ZM6.28603 1.95565C5.26164 2.00221 4.70288 2.1419 4.33038 2.28159C3.81818 2.46785 3.49224 2.70067 3.11973 3.07317C2.74723 3.44568 2.51441 3.81817 2.32816 4.2838C2.18847 4.65631 2.00222 5.21507 1.95565 6.23946C1.90909 7.35698 1.90909 7.68293 1.90909 10.4767C1.90909 13.3171 1.90909 13.643 1.95565 14.7605C2.00222 15.7849 2.18847 16.3437 2.32816 16.7162C2.51441 17.1818 2.74723 17.5543 3.11973 17.9268C3.49224 18.2993 3.81818 18.4856 4.33038 18.7184C4.70288 18.8581 5.26164 18.9978 6.28603 19.0443C7.40355 19.0909 7.72948 19.1375 10.5233 19.1375C13.3171 19.1375 13.6896 19.0909 14.7605 19.0443C15.7849 18.9978 16.3437 18.8581 16.7162 18.7184C17.2284 18.4856 17.5543 18.2993 17.9268 17.9268C18.2993 17.5543 18.5321 17.1818 18.7184 16.7162C18.8581 16.3437 19.0443 15.7849 19.0909 14.7605C19.1375 13.643 19.1375 13.3171 19.1375 10.4767C19.1375 7.68293 19.1375 7.35698 19.0909 6.23946C19.0443 5.21507 18.8581 4.65631 18.7184 4.2838C18.5321 3.81817 18.2993 3.44568 17.9268 3.07317C17.5543 2.70067 17.2284 2.46785 16.7162 2.28159C16.3437 2.1419 15.7849 2.00221 14.7605 1.95565C13.6896 1.90908 13.3171 1.86253 10.5233 1.86253C7.72948 1.86253 7.40355 1.90908 6.28603 1.95565Z'
        fill='#F6F2FF'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.9247 10.4765C15.9247 13.5031 13.5034 15.8779 10.5234 15.8779C7.54332 15.8779 5.12204 13.5031 5.12204 10.4765C5.12204 7.49648 7.54332 5.0752 10.5234 5.0752C13.5034 5.0752 15.9247 7.49648 15.9247 10.4765ZM14.0156 10.4765C14.0156 8.56744 12.479 6.98429 10.5234 6.98429C8.61427 6.98429 7.03113 8.56744 7.03113 10.4765C7.03113 12.4322 8.61427 14.0153 10.5234 14.0153C12.479 14.0153 14.0156 12.4322 14.0156 10.4765Z'
        fill='#F6F2FF'
      />
      <path
        d='M17.4146 4.88905C17.4146 5.5875 16.8559 6.14625 16.1574 6.14625C15.459 6.14625 14.9002 5.5875 14.9002 4.88905C14.9002 4.1906 15.459 3.63184 16.1574 3.63184C16.8559 3.63184 17.4146 4.1906 17.4146 4.88905Z'
        fill='#F6F2FF'
      />
    </svg>
  );
};

const XIcon = () => {
  return (
    <svg
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_128_183)'>
        <path
          d='M12.4895 8.89306L20.3019 0H18.4513L11.6648 7.72014L6.24857 0H0L8.19225 11.6753L0 20.9999H1.85065L9.01266 12.8455L14.7339 20.9999H20.9824M2.51859 1.36666H5.36171L18.4499 19.7004H15.606'
          fill='#F6F2FF'
        />
      </g>
      <defs>
        <clipPath id='clip0_128_183'>
          <rect width='20.9824' height='21' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Footer;
