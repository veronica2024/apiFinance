// importa a biblioteca mysql2 e criar a conexão com o banco de dados

const mysql = require('mysql2'); // importa o pacote para conectar oa banco de dados

const db = mysql.createConnection({
    host:process.env.DB_HOST, // ENDEREÇO DO SERVIDOR DO BANCO DE DADOS 
    user:process.env.DB_USER, // NOME DO USÚARIO PARA ACESSAR O BANCO DE DADOS
    password:process.env.DB_PASS, // SENHA DO USÚARIO PARA ACESSAR O BANCO DE DADOS 
    database:process.env.DB_NAME // NOME DO BANCO DE DADOS
});

db.connect((err) => {
    if(err){
        console.error(`erro ao conectar ao banco de dados`, err); //exibe mensagem error
    return;
}
    console.log(`conectado ao banco de dados mysql`) // exige mensagem de sucesso
});

module.exports=db; //exporta a conexão para ser usada em outros arquivos