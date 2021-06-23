import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ItemHeader from '../Item/ItemHeader';
import ShoppingCart from '../../../../Assets/shopping-cart.svg';
import LeftArrow from '../../../../Assets/short_left.svg';
import { useGlobalContext } from '../../../_context/GlobalContext';
import './index.css';

import Alimento from '../Item/Alimento';

const ItemAlimento = ({ dataAlimento, restauranteSelecionado }) => {
  const { cart } = useGlobalContext();
  const [quantidadeCart, setQuandidadeCart] = useState(0);

  useEffect(() => {
    let quantidade = 0;

    cart.forEach((item) => {
      quantidade += item.quantidade;
    });

    setQuandidadeCart(quantidade);
  }, [cart]);

  return (
    <>
      <ItemHeader restauranteSelecionado={restauranteSelecionado} />
      <div className="after-header">
        <NavLink to="/">
          <figure>
            <img src={LeftArrow} alt="" />
          </figure>
        </NavLink>
        <p className="title-restaurante">{restauranteSelecionado.nome}</p>
        <NavLink to="/carrinho">
          <figure className="figure-cart">
            <img className="cart" src={ShoppingCart} alt="" />
            <span className="cart-count">{quantidadeCart}</span>
          </figure>
        </NavLink>
      </div>

      {dataAlimento?.map((item) => {
        if (restauranteSelecionado.categoria === item.categoria) {
          return (
            <li key={item.idalimento}>
              <Alimento alimento={item} />
            </li>
          );
        }
      })}
    </>
  );
};

export default ItemAlimento;
