//importa as bibliotecas

const express = require('express'); // iporta p framework express
const dotenv = require('dotenv'); //importa o pacote dtenv para gerenciar variaveis e ambiente
const cors = require('cors'); //importa o pacote cors para permite os requisitos e difrentes origens
const bodyparser = require('body-parser'); //importa o pacote body-parse para analizar o corpo das requisições 

//configurar as variaveis de ambiente

dotenv.config();//carregar sa variaveis definidas no arquivo '.env' para pro

//iniciar nova aplicação express

const app = express();

//configurar o cors e o body-parse

app.use(cors()); //habilita o cors para varias rotas
app.use(bodyparser.json()); //configura o body-parse para analizar requisições json



//rota inicial para testar o servidor

app.get('/',(req, res) => {
    res.send("servidor esta rodando"); // definir uma rota para testar o servidor
});


//configurar o servidor para uma porta especifica

const PORT = process.env.PORT || 3000; // Define a porta a parti da ariavel de ambiente ou usa a porta 3000 como padra
app.listen(PORT,()=>{
    console.log(`servidor rodando na porta ${PORT}`); //Eenvia uma mensagem informando que o servidor esta rodando na porta $(PORT)
});