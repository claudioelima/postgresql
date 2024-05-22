// Importando os módulos necessários
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

// Inicializando o aplicativo Express
const app = express();
const port = 3000;

// Configurações do Supabase
const supabaseUrl = 'https://ybwwyderfuvtgpyiymmr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZHpleW5ycXRqb2lrcm1idHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNjA3ODYsImV4cCI6MjAyNzgzNjc4Nn0.F61eIfrB3hiGVa6iZ0qs4guzXBJvesineM5cCVAkcuo';
const supabase = createClient(supabaseUrl, supabaseKey);

// Rota para acessar os dados do banco de dados
app.get('/', async (req, res) => {
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

