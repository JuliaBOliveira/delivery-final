import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useGlobalContext } from '../../../Components/_context/GlobalContext';
import './index.css';

const CardItem = () => {
  const { cart } = useGlobalContext();

  return (
    <div>
      {cart.map((item) => (
        <div className="itemCard">
          <img className="imgCard" src={item.imagem} alt="" />
          <div className="textCard">
            <p className="nomeCard">{item.nome}</p>
            <p className="precoCard">R${item.preco}</p>
            <div className="counterCard">
              <Fab
                onClick={() => item.quantidade - 1}
                className="but-remove"
                size="small"
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p className="p-count-card"> {item.quantidade} </p>
              <Fab
                onClick={() => item.quantidade + 1}
                className="but-add"
                size="small"
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
