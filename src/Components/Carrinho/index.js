import React from 'react';
import CardEndereco from './CardEndereco';
import CardTotal from './CardTotal';
import CardPagamento from './CardPagamento';
import CardItem from './CardItem';
import './index.css';

const Carrinho = () => {
  return (
    <section className="container mainContainer">
      <div className="itens">
        <CardItem />
      </div>
      <div className="detalhes-pedido">
        <div className="detalhes-pedido__endereco">
          <CardEndereco />
        </div>
        <div className="detalhes-pedido__pagamento">
          <CardPagamento />
        </div>
        <div className="detalhes-pedido__total">
          <CardTotal />
        </div>
      </div>
    </section>
  );
};

export default Carrinho;
