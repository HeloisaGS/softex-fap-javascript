//Implemente e trate uma conexão com o seu banco de dados, usando Javascript.Caso a conexão com o banco tenha sucesso deve retomar uma frase positiva. Se isso não ocorrer retorne uma frase informando o Erro.

const database = require('./db');

// Testar a conexão com o banco de dados
database.authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error.message);
  });
