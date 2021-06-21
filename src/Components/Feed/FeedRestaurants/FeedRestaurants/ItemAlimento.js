import React from 'react';
import Alimento from '../Item/Alimento';

const ItemAlimento = ({
  key,
  name,
  description,
  img,
  category,
  price,
  setOpen,
}) => {
  return (
    <>
      <li key={key}>
        <a onClick={() => setOpen(true)} href="#">
          <Alimento
            name={name}
            img={img}
            description={description}
            category={category}
            price={price}
          />
        </a>
      </li>
    </>
  );
};

export default ItemAlimento;
