import React from 'react';
import style from './Cart.module.css';
import CloseIcon from '../../../Images/Common/Icons/CloseIcon';

const Cart = ({ setIsCartOpen }) => {
  const modalRef = React.useRef();

  // No mobile, por max-width, o carrinho ocupa uma qntd de 'fr'
  // e o modal cria uma área escura na parte de fora

  const handleCloseCart = () => {
    modalRef.current.classList.add(style.closing);
    setTimeout(() => {
      setIsCartOpen(false);
    }, 350);
  };

  return (
    <>
      <div className={style.modalBackground}>
        <div ref={modalRef} className={style.modal}>
          <div className={style.modalTop}>
            <div>
              <h4 className={style.modalTitle}>Carrinho</h4>
              <p className={style.modalSubtitle}>
                Produtos adicionados ao carrinho
              </p>
            </div>
            <div onClick={handleCloseCart} className={style.closeContainer}>
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
