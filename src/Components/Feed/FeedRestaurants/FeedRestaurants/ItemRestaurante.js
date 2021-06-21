import React from 'react';
import Restaurante from '../Item/Restaurante';

const ItemRestaurante = ({ dataRestaurante, setOpen }) => {
  return (
    <>
      {dataRestaurante &&
        dataRestaurante?.map((item) => (
          <li key={item.idestab}>
            <a onClick={() => setOpen(true)} href="#">
              <Restaurante
                name={item.nome}
                img={item.logo}
                description={item.descricao}
                category={item.categoria}
              />
            </a>
          </li>
        ))}
    </>
  );
};

export default ItemRestaurante;
