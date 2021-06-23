import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Form } from 'react-bootstrap';
import api from '../../service/axios';
import './index.css';

const SearchBar = ({ props, setDataRestaurante }) => {
  const [search, setSearch] = useState('');
  const [restaurante, setRestaurante] = useState(null);

  function getRestaurantes() {
    api.get('/estabelecimento').then((response) => {
      setRestaurante(response.data);
    });
  }

  function handleClick() {}

  function handleOnSubmit(event) {
    event?.preventDefault();
    const resultados = restaurante?.filter(
      (restaurante) => restaurante.nome.toLowerCase().indexOf(search) === 0,
    );
    setDataRestaurante(resultados);
  }

  function handleSearchChange(event) {
    event?.preventDefault();
    setSearch(event?.target?.value.toLowerCase());
  }

  useEffect(() => {
    getRestaurantes();
  }, []);

  return (
    <div>
      <Form className="form-sb" onSubmit={(e) => handleOnSubmit(e)}>
        <TextField
          label="Buscar restaurante"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon onClick={handleClick()} />
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleSearchChange(e)}
        />
      </Form>
    </div>
  );
};

export default SearchBar;
