const dotenv = require('dotenv'); // Importa o pacote dotenv para gerenciar variáveis de ambiente

//Configurar as Variáveis de ambiente

dotenv.config(); // Carrega as variáveis definidas no arquivo '.env' para process.env(processos)

//Importar as Bibliotecas
const express = require('express'); // Importa o framework Express
const cors = require('cors'); // Importa o pacote cors para permitir requisições de diferentes origens
const bodyParser = require('body-parser'); // Importa o pacote body-parser para analisar o corpo das requisições HTTP

const db = require('./config/db'); // Importa a conexão com o banco de dados


const transactionsRoutes = require('./routes/transactions');

//inicializar nova aplicação Express

const app = express(); // Inicializa uma nova aplicação Express


//configurar o CORS e o bady-Parse

app.use(cors()); // Habilita o CORS para todas as rotas
app.use(bodyParser.json()); // Configura o body-parser para analisar requisições JSON


app.use('./api/transaction',transactionsRoutes);

//Rota inicial para testar o servidor

app.get('/', (req, res) => {
    res.send('Servidor está rodando'); // Define uma rota inicial para testar o servidor
  });

//Configurar o servidor para uma porta específica

const PORT = process.env.PORT || 3000; // Define a porta a partir da variável de ambiente ou usa a porta 3000 como padrão
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); // Loga uma mensagem informando que o servidor está rodando
}); 