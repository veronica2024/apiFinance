const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria um novo roteador
const transactionsController = require('../controllers/transactionsController'); // Importa o controlador de transações

// Definindo uma rota para obter todas as transações
router.get('/', transactionsController.getAllTransactions);

//Definindo uma rota para adicionar uma nova transação
router.post('/',transactionsController.addTransaction);

// definindo uma rota para atualizar uma transação 
router.post('/', transactionsController.updateTransactionsPunt);





// Exportando o roteador
module.exports = router;