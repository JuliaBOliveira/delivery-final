import React from 'react';
import Restaurante from '../Item/Restaurante';

const ItemRestaurante = ({
  dataRestaurante,
  setOpen,
  setRestauranteSelecionado,
}) => {
  function handleRestaurante(restaurante) {
    setOpen(true);
    setRestauranteSelecionado(restaurante);
  }

  return (
    <>
      {dataRestaurante &&
        dataRestaurante?.map((item) => (
          <li key={item.idestab}>
            <a onClick={() => handleRestaurante(item)} href="#">
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
