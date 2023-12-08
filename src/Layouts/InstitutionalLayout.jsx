import React from 'react';
import Header from '../Components/Institutional/Header/Header';
import Footer from '../Components/Institutional/Footer/Footer';
import Cart from '../Components/Institutional/Cart/Cart';

const InstitutionalLayout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(true);

  return (
    <>
      <Header setIsCartOpen={setIsCartOpen} />
      {/* Componente do carrinho, vai receber o set e isCartOpen */}
      {/* Tem q colocar aq e nao no header
      porque vai ter o botao de abrir e fechar o carrinho tambem */}
      {/* O cartData (estado) vai ser de context e nao tem a ver
      com a funcionalidade visual */}

      {isCartOpen ? <Cart setIsCartOpen={setIsCartOpen} /> : null}

      {children}
      <div className='content-flex-1'></div>
      <Footer />
    </>
  );
};

export default InstitutionalLayout;
