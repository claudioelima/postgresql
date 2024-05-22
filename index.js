// Importando os módulos necessários
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

// Inicializando o aplicativo Express
const app = express();
const port = 3000;

// Configurações do Supabase
const supabaseUrl = 'https://ybwwyderfuvtgpyiymmr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlid3d5ZGVyZnV2dGdweWl5bW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzcxMzUsImV4cCI6MjAzMDkxMzEzNX0.4onQPDF-kGwvuUE1WvFiD41Dv7hgvLob0V6b3fh88iw';

const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/', async (req, res) => {
  try {
      // Consulta SQL para selecionar todos os usuários da tabela 'clientes' usando Supabase
      const { data, error } = await supabase.from('clientes').select('*');
      if (error) {
          throw error;
      }
      res.json(data); // Retorna os dados como JSON
  } catch (err) {
      console.error('Erro ao consultar dados do banco de dados:', err.message);
      res.status(500).json({ error: 'Erro ao consultar dados do banco de dados' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

