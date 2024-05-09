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
