import React, { useState, useEffect } from 'react';
import ItemRestaurante from './FeedRestaurants/ItemRestaurante';
import SearchBar from '../../SearchBar';
import ItemAlimento from './FeedRestaurants/ItemAlimento';
import api from '../../../service/axios';
import Modal from '@material-ui/core/Modal';
import './index.css';

const FeedRestaurants = () => {
  const [dataRestaurante, setDataRestaurante] = useState(null);
  const [dataAlimento, setDataAlimento] = useState(null);

  const [open, setOpen] = useState(false);
  const [restauranteSelecionado, setRestauranteSelecionado] = useState();

  function getEstabelecimento() {
    api.get('/estabelecimento').then((response) => {
      setDataRestaurante(response.data);
    });
    api.get('/alimentos').then((response) => {
      setDataAlimento(response.data);
    });
  }

  useEffect(() => {
    getEstabelecimento();
  }, []);

  return (
    <>
      <SearchBar
        className="searchBar"
        setDataRestaurante={setDataRestaurante}
      />

      <ul>
        <ItemRestaurante
          setOpen={setOpen}
          dataRestaurante={dataRestaurante}
          setRestauranteSelecionado={setRestauranteSelecionado}
        />
      </ul>

      <Modal
        className="modalTeste"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modalTeste__body">
          {dataAlimento && (
            <ItemAlimento
              dataAlimento={dataAlimento}
              restauranteSelecionado={restauranteSelecionado}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default FeedRestaurants;
