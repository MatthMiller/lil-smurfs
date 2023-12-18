import { useState } from 'react';
import style from './Roulette.module.css';
import './RouletteGlobalSpecificStyles.css';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

// Imagens prêmios mockados (por enquanto):
import PixImage from '../../../Images/RoulettePage/pix.png';
import PixImage2 from '../../../Images/RoulettePage/pix-2.png';
import ContaAleatoriaImage from '../../../Images/RoulettePage/conta-aleatoria.png';
import AddToCartIcon from '../../../Images/Common/Icons/AddToCartIcon';

const prizesDisplay = [
  { name: 'Conta Aleatória' },
  { name: 'Pix R$ 10' },
  { name: 'Pix R$ 25' },
  { name: 'Conta Aleatória' },
  { name: 'Conta Aleatória' },
];

const prizes = [
  {
    image: ContaAleatoriaImage,
  },
  {
    image: PixImage,
  },
  {
    image: PixImage2,
  },
  {
    image: ContaAleatoriaImage,
  },
  {
    image: ContaAleatoriaImage,
  },
];

const winPrizeIndex = 1;

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id:
    typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : generateId(),
}));

const Roulette = () => {
  const [start, setStart] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(true);

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    if (!start) {
      setIsButtonActive(false);
      setStart((prevState) => !prevState);
    }
  };

  const handlePrizeDefined = () => {
    alert('🥳 Prêmio definido! 🥳 Nome: ' + prizesDisplay[winPrizeIndex].name);
    setIsButtonActive(true);
  };

  return (
    <>
      <section className='g-wrapper'>
        <div className='g-container'>
          <div className={style.ticketsWrapper}>
            <div className={style.ticketsLeft}>
              <TicketIcon />
              <p className={style.ticketsText}>
                Tickets: <span>0</span>
              </p>
            </div>
            <div className={style.addToCart}>
              <AddToCartIcon />
            </div>
          </div>
          <div className={style.addToCartButton}></div>
          <div className={style.rouletteWrapper}>
            <RoulettePro
              prizes={prizeList}
              prizeIndex={prizeIndex}
              start={start}
              onPrizeDefined={handlePrizeDefined}
            />
            <div className={style.portalDecoratorRight}></div>
            <div className={style.portalDecoratorLeft}></div>
          </div>

          <div className={style.sortearButtonContainer}>
            <button
              className={
                !isButtonActive
                  ? `${style.sortearButton} ${style.disabledButton}`
                  : style.sortearButton
              }
              onClick={handleStart}
            >
              <DiceIcon />
              <p>Sortear Prêmio</p>
            </button>
          </div>
        </div>
      </section>

      <section className='g-wrapper'>
        <div className='g-container'>
          <h2 className={style.title}>
            Prêmios e <span>chances de ganhar</span>
          </h2>
          <ul className={style.chanceList}>
            <li className={style.chanceItem}>
              <div className={style.chance}>
                <p>45%</p>
              </div>
              <p className={style.chanceText}>
                R$10 no PIX:{' '}
                <span>Depositamos diretamente na sua conta via PIX.</span>
              </p>
            </li>
            <li className={style.chanceItem}>
              <div className={style.chance}>
                <p>5%</p>
              </div>
              <p className={style.chanceText}>
                R$25 no PIX:{' '}
                <span>Depositamos diretamente na sua conta via PIX.</span>
              </p>
            </li>
            <li className={style.chanceItem}>
              <div className={style.chance}>
                <p>50%</p>
              </div>
              <p className={style.chanceText}>
                Conta unranked aleatória: <span>Uma conta smurf unranked.</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

const DiceIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      fill='current'
    >
      <path
        d='M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z'
        fill='#F6F2FF'
      />
    </svg>
  );
};

const TicketIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.2 16L12 13.9L14.75 16L13.7 12.6L16.5 10.4H13.1L12 7L10.9 10.4H7.5L10.25 12.6L9.2 16ZM4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V14.625C2 14.4417 2.05833 14.2833 2.175 14.15C2.29167 14.0167 2.44167 13.9333 2.625 13.9C3.025 13.7667 3.35417 13.525 3.6125 13.175C3.87083 12.825 4 12.4333 4 12C4 11.5667 3.87083 11.175 3.6125 10.825C3.35417 10.475 3.025 10.2333 2.625 10.1C2.44167 10.0667 2.29167 9.98333 2.175 9.85C2.05833 9.71667 2 9.55833 2 9.375V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V9.375C22 9.55833 21.9417 9.71667 21.825 9.85C21.7083 9.98333 21.5583 10.0667 21.375 10.1C20.975 10.2333 20.6458 10.475 20.3875 10.825C20.1292 11.175 20 11.5667 20 12C20 12.4333 20.1292 12.825 20.3875 13.175C20.6458 13.525 20.975 13.7667 21.375 13.9C21.5583 13.9333 21.7083 14.0167 21.825 14.15C21.9417 14.2833 22 14.4417 22 14.625V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V15.45C19.3833 15.0833 18.8958 14.5958 18.5375 13.9875C18.1792 13.3792 18 12.7167 18 12C18 11.2833 18.1792 10.6208 18.5375 10.0125C18.8958 9.40417 19.3833 8.91667 20 8.55V6H4V8.55C4.61667 8.91667 5.10417 9.40417 5.4625 10.0125C5.82083 10.6208 6 11.2833 6 12C6 12.7167 5.82083 13.3792 5.4625 13.9875C5.10417 14.5958 4.61667 15.0833 4 15.45V18Z'
        fill='#F6F2FF'
      />
    </svg>
  );
};

export default Roulette;
