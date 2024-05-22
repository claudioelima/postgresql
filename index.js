// Importando os módulos necessários
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Inicializando o aplicativo Express
const app = express();
const port = process.env.PORT || 3000;

// Configurações do Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Definição da rota principal
app.get('/', async (req, res) => {
  try {
    // Consulta SQL para selecionar todos os usuários da tabela 'clientes' usando Supabase
    const { data, error } = await supabase.from('clientes').select('*');
    if (error) {
      throw error;
    }
    res.json(data); // Retorna os dados como JSON
  } catch (err) {
    console.error('Erro ao consultar dados do banco de dados:', err);
    res.status(500).json({ error: 'Erro ao consultar dados do banco de dados', detalhes: err.message });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
