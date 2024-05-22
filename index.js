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

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL e KEY são necessários.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/', async (req, res) => {
  try {
    console.log('Iniciando consulta ao banco de dados...');
    // Consulta SQL para selecionar todos os usuários da tabela 'clientes' usando Supabase
    const { data, error } = await supabase.from('clientes').select('*');
    if (error) {
      console.error('Erro retornado pela consulta:', error);
      throw error;
    }
    console.log('Dados consultados com sucesso:', data);
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
