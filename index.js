/*
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo à página inicial!');
  });

app.get('/sobre', (req, res) => {
    res.send('Esta é a página de informações sobre o nosso aplicativo.');
  });
    

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
*/

const { Client } = require('pg');
const parse = require('pg-connection-string').parse;

// URL de conexão fornecido
const connectionString = 'postgres://postgres.ybwwyderfuvtgpyiymmr:[OIOXjmxOA0nZF6lx]@aws-0-sa-east-1.pooler.supabase.com:5432/postgres';

// Analisar a URL de conexão
const config = parse(connectionString);

// Criar uma nova instância do cliente PostgreSQL
const client = new Client(config);

// Conectar ao banco de dados
client.connect()
    .then(() => console.log('Conexão com o PostgreSQL estabelecida com sucesso'))
    .catch(err => console.error('Erro ao conectar com o PostgreSQL', err));

// Execute consultas SQL, por exemplo:
client.query('SELECT * FROM clientes')
    .then(res => console.log(res.rows))
    .catch(err => console.error('Erro ao executar consulta', err))
    .finally(() => client.end()); // Feche a conexão quando não estiver em uso
