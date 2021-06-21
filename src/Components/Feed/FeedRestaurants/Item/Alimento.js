import React from 'react';
import './index.css';

const Alimento = ({ name, img, descrption, price }) => {
  return (
    <div className="alimento">
      <div className="alimento__img">
        <img src={img} alt="" />
      </div>
      <div className="alimento__descricao">
        <h3>{name}</h3>
        <p>{descrption}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Alimento;
