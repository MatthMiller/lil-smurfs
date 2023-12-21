import React from 'react';
import style from './Cart.module.css';
import CloseIcon from '../../../Images/Common/Icons/CloseIcon';

const Cart = ({ setIsCartOpen }) => {
  // Como passar dados entre páginas (query params)
  // https://medium.com/@codingscenes/react-router-to-pass-data-between-pages-6ee22fdf2dfa

  const modalRef = React.useRef();

  const handleCloseCart = () => {
    modalRef.current.classList.add(style.closing);
    setTimeout(() => {
      setIsCartOpen(false);
    }, 350);
  };

  const handleTryToCloseOnMobile = ({ target }) => {
    if (target.classList.contains(style.modalBackground)) {
      handleCloseCart();
    }
  };

  return (
    <>
      <div onClick={handleTryToCloseOnMobile} className={style.modalBackground}>
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
