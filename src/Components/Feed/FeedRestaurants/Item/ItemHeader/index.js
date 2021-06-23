import React from 'react';
import './index.css';

const ItemHeader = ({ restauranteSelecionado }) => {
  return (
    <div className="header">
      <div>
        <img className="imagem-logo" src={restauranteSelecionado.logo} alt="" />
      </div>
      <div>
        <div className="header-nome">{restauranteSelecionado.nome}</div>
        <div className="header-cat-tde">
          {restauranteSelecionado.categoria}{' '}
          <span>{restauranteSelecionado.tempo_de_entrega}</span>
        </div>
        <div className="header-tp">{restauranteSelecionado.tipo_pagamento}</div>
      </div>
    </div>
  );
};

export default ItemHeader;
