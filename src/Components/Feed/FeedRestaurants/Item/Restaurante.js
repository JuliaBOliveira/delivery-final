import React from 'react';
import './index.css';

const Restaurante = ({ name, img, category, description }) => {
  return (
    <div className="restaurante">
      <div className="restaurante__img">
        <img src={img} alt={name} />
      </div>
      <div className="restaurante__descricao">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{description}</p>
        <p>Teste</p>
      </div>
    </div>
  );
};

export default Restaurante;
