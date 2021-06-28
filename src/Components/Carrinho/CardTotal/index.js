import React from 'react';
import api from '../../../service/axios';
import Button from '@material-ui/core/Button';
import './index.css';
import { useGlobalContext } from '../../../Components/_context/GlobalContext';

const CardTotal = () => {
  const { cart } = useGlobalContext();

  function handleCart(event) {
    event.preventDefault();
    console.log('cart', cart);
    cart.map((item) =>
      postCarrinho(item.nome, item.quantidade, item.preco, item.restaurante),
    );
  }

  function handleValor(preco, quantidade) {
    let total = preco * quantidade;
    return total;
  }

  function postCarrinho(nomeitem, quantidadeitem, precoitem, restaurante) {
    api.post('/carrinho', { nomeitem, quantidadeitem, precoitem, restaurante });
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
      {}
      <Button variant="contained" onClick={(e) => handleCart(e)}>
        Finalizar compra
      </Button>
    </div>
  );
};

export default CardTotal;
