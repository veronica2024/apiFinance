// importa a biblioteca mysql2 e criar a conexão com o banco de dados

const mysql = require('mysql2'); // importa o pacote para conectar oa banco de dados


// Exibe as variáveis de ambiente carregadas
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
//depois pode apagar 


const db = mysql.createConnection({
    host:process.env.DB_HOST, // ENDEREÇO DO SERVIDOR DO BANCO DE DADOS 
    user:process.env.DB_USER, // NOME DO USÚARIO PARA ACESSAR O BANCO DE DADOS
    password:process.env.DB_PASS, // SENHA DO USÚARIO PARA ACESSAR O BANCO DE DADOS 
    database:process.env.DB_NAME // NOME DO BANCO DE DADOS
});

db.connect((err) => {
    if (err) {
    console.error('Erro ao conectar ao banco de dados:', err); // Exibe mensagem de erro
    return;
    }
    console.log(`Conectado ao banco de dados ${process.env.DB_NAME}`); // Exibe mensagem de sucesso
   });
   module.exports = db; // Exporta a conexão para ser usada em outros arquivos