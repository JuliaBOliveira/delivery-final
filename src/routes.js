const express = require('express');
const bodyParser = require('body-parser');
const Pool = require('pg-pool');
const cors = require('cors');

const pool = new Pool({
  database: 'delivery',
  host: 'localhost',
  user: 'postgres',
  password: '123',
  port: 5432,
  ssl: false,
  max: 20,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000,
  maxUses: 7500,
});

const app = express();

app.use(cors());

// Criando uma rota GET que retorna os dados da tabela usuários.
app.get('/alimentos', async function (req, res) {
  (async () => {
    var client = await pool.connect();
    try {
      var result = await client.query('SELECT * from alimentos');
      console.log('hello from', result);
      res.send(result.rows);
    } finally {
      client.release();
    }
  })().catch((e) => console.error(e.message, e.stack));
});

/* app.get('/carrinho', async function (req, res) {
  (async () => {
    var client = await pool.connect();
    try {
      var result = await client.query('SELECT * from carrinho');
      console.log('hello from', result);
      res.send(result.rows);
    } finally {
      client.release();
    }
  })().catch((e) => console.error(e.message, e.stack));
}); */

app.get('/estabelecimento', async function (req, res) {
  (async () => {
    var client = await pool.connect();
    try {
      var result = await client.query('SELECT * from estabelecimento');
      console.log('hello from', result);
      res.send(result.rows);
    } finally {
      client.release();
    }
  })().catch((e) => console.error(e.message, e.stack));
});

app.get('/usuario', async function (req, res) {
  (async () => {
    var client = await pool.connect();
    try {
      var result = await client.query('SELECT * from usuario');
      console.log('hello from', result);
      res.send(result.rows);
    } finally {
      client.release();
    }
  })().catch((e) => console.error(e.message, e.stack));
});

// Iniciando o servidor.
app.listen(3001, () => {
  console.log(
    'Vai no navegador e entra em http://localhost:3001/users pra ver os usuários cadastrados.',
  );
});
