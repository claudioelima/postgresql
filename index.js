const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: 5432,
});

// Rota para acessar os dados do banco de dados
app.get('/usuarios', async (req, res) => {
    try {
        // Consulta SQL para selecionar todos os usuários da tabela 'clientes'
        const { rows } = await pool.query('SELECT * FROM clientes');
        res.json(rows); // Retorna os dados como JSON
    } catch (err) {
        console.error('Erro ao consultar dados do banco de dados:', err);
        res.status(500).json({ error: 'Erro ao consultar dados do banco de dados' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
