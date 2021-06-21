import React, { useState, useEffect } from 'react';
import ItemRestaurante from './FeedRestaurants';
import ItemAlimento from './FeedRestaurants/ItemAlimento';
import api from '../../../service/axios';
import Modal from '@material-ui/core/Modal';
import Loading from '../../../Helpers/Loading';
import './index.css';

const FeedRestaurants = () => {
  const [dataRestaurante, setDataRestaurante] = useState(null);
  const [dataAlimento, setDataAlimento] = useState(null);

  const [open, setOpen] = React.useState(false);

  function getEstabelecimento() {
    /* api.get('/estabelecimento').then((response) => {
      console.log('response', response);
      //debugger;
      setDataRestaurante(response.data);
    }); */

    fetch('http://localhost:3000/estabelecimento').then((response) =>
      response.json().then((data) => console.log('data', data)),
    );
    //.then((variavel) => console.log('variavel', variavel));
  }

  useEffect(() => {
    getEstabelecimento();

    /*  axios
      .get('/alimentos')
      .then((response) => setDataAlimento(response.data))
      .catch((err) => {
        console.log('oops! ocorreu um erro!', err);
      }); */
  }, []);

  return (
    <>
      <ul>
        <ItemRestaurante setOpen={setOpen} dataRestaurante={dataRestaurante} />
      </ul>

      {/*  <Modal
        className="modalTeste"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modalTeste__body">
          {dataAlimento && (
            <ul>
              {dataAlimento?.map((alimento) => (
                <ItemAlimento
                  key={alimento.idalimento}
                  name={alimento.nomealimento}
                  description={alimento.descricaoalimento}
                  img={alimento.imgalimento}
                  price={alimento.precoalimento}
                />
              ))}
            </ul>
          )}
          Teste
        </div>
      </Modal> */}
    </>
  );
};

export default FeedRestaurants;
