import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import api from '../../../service/axios';
import './index.css';

const CardEndereco = () => {
  const [usuario, setUsuario] = useState(null);

  function getUsuario() {
    api.get('/usuario').then((response) => {
      setUsuario(response.data);
    });
  }

  useEffect(() => {
    getUsuario();
  }, []);

  return (
    <div className="geralCardEnde">
      <div className="fixpCardEnde">
        <p className="fixpCardEnde__entrega">Detalhes do endereço</p>
        <p className="fixpCardEnde__trocar">Trocar</p>
      </div>
      <div>
        {usuario && (
          <div className="usuarioCardEnde">
            <p className="p-usuario__nome">{usuario[2]?.nome}</p>
            <Divider component="p" />
            <p className="p-usuario">{usuario[2]?.endereco}</p>
            <Divider component="li" />
            <p className="p-usuario">{usuario[2]?.celular}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardEndereco;
