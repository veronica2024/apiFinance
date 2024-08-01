const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria um novo roteador
const transactionsController = require('../controllers/transactionsController'); // Importa o controlador de transações

// Definindo uma rota para obter todas as transações
router.get('/', transactionsController.getAllTransactions);


//Definindo uma rota para adicionar uma nova transação
router.post('/',transactionsController.addTransaction);

//Definindo uma rota para atualizar uma trasação existente(substituição completa)
router.put('/:id', transactionsController.updateTransactionPut);

//Definindo uma rota para atualizar uma trasação existente(substituição parcial)
router.patch('/:id', transactionsController.updateTransactionPatch);


//DELETE

//definindo um arota 
router.delete('/:id',transactionsController.deleteTransaction);

module.exports = router;