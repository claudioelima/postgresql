const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados PostgreSQL
const connectionString = 'postgres://postgres.ybwwyderfuvtgpyiymmr:[OIOXjmxOA0nZF6lx]@aws-0-sa-east-1.pooler.supabase.com:5432/postgres';
const client = new Client({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false // Ajuste necessário para conexão com o Supabase
    }
});
client.connect();

// Rota para obter dados do banco de dados
app.get('/usuarios', async (req, res) => {
    try {
        // Executa uma consulta SQL para obter todos os usuários
        const result = await client.query('SELECT * FROM clientes');
        res.json(result.rows); // Retorna os resultados como JSON
    } catch (err) {
        console.error('Erro ao consultar dados do banco de dados:', err);
        res.status(500).json({ error: 'Erro ao consultar dados do banco de dados' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
