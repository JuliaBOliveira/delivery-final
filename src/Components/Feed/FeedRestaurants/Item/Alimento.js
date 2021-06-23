import React, { useState } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import { useGlobalContext } from '../../../_context/GlobalContext';
import './index.css';

const Alimento = ({ alimento }) => {
  const [count, setCount] = useState(1);
  const { cart, setCart } = useGlobalContext();

  function addToCart() {
    const buildCart = { ...alimento, quantidade: count };
    setCart([...cart, buildCart]);
  }

  return (
    <>
      <div className="geral">
        <div className="alimento">
          <div className="alimento__img">
            <img src={alimento?.imagem} alt="" />
          </div>
          <div className="alimento__name">
            <h3>{alimento?.nome}</h3>
            <h3>R${alimento?.preco}</h3>
          </div>
          <div className="alimento__description">
            <p>{alimento?.descricao}</p>
            <div className="count-butatc">
              <div className="counter">
                <Fab
                  onClick={() => setCount(count - 1)}
                  className="but-remove"
                  size="small"
                  aria-label="add"
                >
                  <RemoveIcon />
                </Fab>
                <p className="p-count">{count}</p>
                <Fab
                  onClick={() => setCount(count + 1)}
                  className="but-add"
                  size="small"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </div>
              <Button
                variant="contained"
                onClick={() => addToCart()}
                className="but-atc"
              >
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alimento;
