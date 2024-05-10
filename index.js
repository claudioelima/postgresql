const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
    user: 'postgres.ybwwyderfuvtgpyiymmr',
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    database: 'postgres',
    password: 'OIOXjmxOA0nZF6lx',
    port: 5432,
});

// Rota para acessar os dados do banco de dados
app.get('/usuarios', async (req, res) => {
    try {
        // Consulta SQL para selecionar todos os usuários da tabela 'usuarios'
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
