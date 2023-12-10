import { useState } from 'react';
import style from './Roulette.module.css';
import './RouletteGlobalSpecificStyles.css';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

// Imagens prêmios mockados (por enquanto):
import PixImage from '../../../Images/RoulettePage/pix.png';
import PixImage2 from '../../../Images/RoulettePage/pix-2.png';
import ContaAleatoriaImage from '../../../Images/RoulettePage/conta-aleatoria.png';

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

export default Roulette;
