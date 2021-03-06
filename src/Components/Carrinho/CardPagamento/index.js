import React from 'react';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './index.css';

const CardPagamento = () => {
  const [value, setValue] = React.useState('Pix');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <p className="titlePagamento">Método de pagamento</p>
      <div className="pagamentoGeral">
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={value}>
            <FormControlLabel
              value="pix"
              onChange={handleChange}
              control={<Radio />}
              label="Pix"
            />
            <Divider component="ul" />
            <FormControlLabel
              value="credit-card"
              onChange={handleChange}
              control={<Radio />}
              label="Cartão de crédito"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default CardPagamento;
