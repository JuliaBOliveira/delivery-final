import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../../Components/_context/GlobalContext';
import Button from '@material-ui/core/Button';
import './index.css';

const CardTotal = () => {
  const { cart } = useGlobalContext();

  function handleValor(preco, quantidade) {
    let total = preco * quantidade;
    return total;
  }

  return (
    <div className="total">
      <div className="valor-itens">
        <p>Valor dos itens</p>
        <p>
          R$
          {cart.map((item) => handleValor(item.preco, item.quantidade))}
        </p>
      </div>
      <div className="valor-entrega">
        <p>Entrega:</p>
        <p>R$ 5</p>
      </div>

      <div className="valor-total">
        <p className="p-total">Total</p>
        <p className="span-total">R$ 69.00</p>
      </div>

      <Button variant="contained">Finalizar compra</Button>
    </div>
  );
};

export default CardTotal;
