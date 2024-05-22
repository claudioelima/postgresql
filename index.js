app.get('/', async (req, res) => {
  try {
    console.log('Iniciando consulta ao banco de dados...');
    
    // Verifica se a tabela 'clientes' existe
    const { data: tables, error: tablesError } = await supabase
      .from('pg_tables')
      .select('tablename')
      .eq('schemaname', 'public')
      .eq('tablename', 'clientes');

    if (tablesError) {
      console.error('Erro ao verificar a tabela:', tablesError);
      throw tablesError;
    }

    if (tables.length === 0) {
      console.error('Tabela "clientes" não encontrada.');
      res.status(500).json({ error: 'Tabela "clientes" não encontrada no banco de dados.' });
      return;
    }

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
