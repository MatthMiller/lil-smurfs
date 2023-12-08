import React from 'react';
import style from './Faq.module.css';
import bgImage from '../../../Images/HomePage/faq-bg.jpg';

const Faq = () => {
  return (
    <>
      <section className={style.faq}>
        <div className='g-wrapper'>
          <div className={style.content + ' g-container'}>
            <h3 className={style.title}>F.A.Q</h3>
            <p className={style.subtitle}>
              Veja alguma das perguntas mais frequentes sobre nossos serviços
            </p>

            <ul className={style.faqList}>
              <div className={style.column}>
                <FaqItem
                  icon={<QuemSomosIcon />}
                  title='Quem somos?'
                  description='Surgimos de uma junção entre as duas maiores lojas de Smurfs do mercado Lilsmurfs e Elostar, trabalhamos com a venda de Contas de League of Legends há mais de 7 anos, e já conquistamos muito espaço com nosso ótimo atendimento e o melhor, o menor preço do mercado. Nosso diferencial é te proporcionar a melhor experiência para comprar sua smurf, com o site mais interativo para nossos clientes. Venha fazer parte dessa comunidade gigantesca!'
                />
                <FaqItem
                  icon={<GarantiaIcon />}
                  title='Qual é a garantia de vocês?'
                  description='Nós levamos extremamente a sério todas as medidas de segurança para evitar banimentos. Contudo, mesmo com nossos esforços, ainda existe uma taxa mínima de 0,01% de banimentos (aproximadamente 1 em cada 1000 contas) ou em situações de BanWaves. É importante frisar que comprar contas vai contra os termos da Riot Games e, como resultado, você corre o risco de receber suspensões e/ou banimentos, especialmente durante as primeiras partidas, quando o histórico coop (contra bots) ainda está visível no perfil.'
                />
                <FaqItem
                  icon={<HorarioFuncionamentoIcon />}
                  title='Qual o horário de funcionamento?'
                  description='Funcionamos 24/7, pode comprar conosco a hora que você quiser, será entregue IMEDIATAMENTE!!!'
                />
              </div>
              <div className={style.column}>
                <FaqItem
                  icon={<TempoEntregaIcon />}
                  title='Qual o tempo de entrega?'
                  description='O tempo de entrega é IMEDIATO, logo após a confirmação do pagamento, será automaticamente enviado para o e-mail cadastrado do seu usuario todas as informações do produto adquidiro.'
                />
                <FaqItem
                  icon={<FormasPagamentoIcon />}
                  title='Quais formas de pagamentos aceitamos?'
                  description='Atualmente estamos só trabalhando com os métodos de pagamento do mercado pago. Em breve teremos picpay.'
                />
              </div>
            </ul>
          </div>
        </div>

        <div className={style.bgContainer}>
          <div className={style.bgShadow}></div>
          <img className={style.bgImage} src={bgImage} alt='' />
        </div>
      </section>
    </>
  );
};

const FaqItem = ({ icon, title, description }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <li className={isActive ? `${style.active} ${style.item}` : style.item}>
      <div onClick={() => setIsActive(!isActive)} className={style.itemTop}>
        <div className={style.itemTopLeft}>
          {icon}
          <p className={style.itemTitle}>{title}</p>
        </div>
        <ArrowRight />
      </div>
      <div className={style.innerItem}>
        <p className={style.description}>{description}</p>
      </div>
    </li>
  );
};

const ArrowRight = () => {
  return (
    <svg
      className={style.isArrow}
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M15 25.5V10.5L22.5 18L15 25.5Z' fill='#A098B1' />
    </svg>
  );
};

const QuemSomosIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 21V3H12V7H22V21H2ZM4 19H6V17H4V19ZM4 15H6V13H4V15ZM4 11H6V9H4V11ZM4 7H6V5H4V7ZM8 19H10V17H8V19ZM8 15H10V13H8V15ZM8 11H10V9H8V11ZM8 7H10V5H8V7ZM12 19H20V9H12V11H14V13H12V15H14V17H12V19ZM16 13V11H18V13H16ZM16 17V15H18V17H16Z'
        fill='#A098B1'
      />
    </svg>
  );
};

const TempoEntregaIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.55 18.2L15.725 12H11.725L12.45 6.325L7.825 13H11.3L10.55 18.2ZM8 22L9 15H4L13 2H15L14 10H20L10 22H8Z'
        fill='#A098B1'
      />
    </svg>
  );
};

const FormasPagamentoIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14 13C13.1667 13 12.4583 12.7083 11.875 12.125C11.2917 11.5417 11 10.8333 11 10C11 9.16667 11.2917 8.45833 11.875 7.875C12.4583 7.29167 13.1667 7 14 7C14.8333 7 15.5417 7.29167 16.125 7.875C16.7083 8.45833 17 9.16667 17 10C17 10.8333 16.7083 11.5417 16.125 12.125C15.5417 12.7083 14.8333 13 14 13ZM7 16C6.45 16 5.97917 15.8042 5.5875 15.4125C5.19583 15.0208 5 14.55 5 14V6C5 5.45 5.19583 4.97917 5.5875 4.5875C5.97917 4.19583 6.45 4 7 4H21C21.55 4 22.0208 4.19583 22.4125 4.5875C22.8042 4.97917 23 5.45 23 6V14C23 14.55 22.8042 15.0208 22.4125 15.4125C22.0208 15.8042 21.55 16 21 16H7ZM9 14H19C19 13.45 19.1958 12.9792 19.5875 12.5875C19.9792 12.1958 20.45 12 21 12V8C20.45 8 19.9792 7.80417 19.5875 7.4125C19.1958 7.02083 19 6.55 19 6H9C9 6.55 8.80417 7.02083 8.4125 7.4125C8.02083 7.80417 7.55 8 7 8V12C7.55 12 8.02083 12.1958 8.4125 12.5875C8.80417 12.9792 9 13.45 9 14ZM20 20H3C2.45 20 1.97917 19.8042 1.5875 19.4125C1.19583 19.0208 1 18.55 1 18V7H3V18H20V20Z'
        fill='#A098B1'
      />
    </svg>
  );
};

const HorarioFuncionamentoIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z'
        fill='#A098B1'
      />
    </svg>
  );
};

const GarantiaIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 18V16H16V18H10ZM6.05 18L0.375 12.325L1.8 10.9L6.05 15.15L15.2 6L16.625 7.425L6.05 18ZM14 14V12H20V14H14ZM18 10V8H24V10H18Z'
        fill='#A098B1'
      />
    </svg>
  );
};

export default Faq;
