const express = require('express'); //importa a framework express
const router = express.Router(); // criar um roteador
 const transactionsController = require('../controllers/transactionsController'); // importa o controlador 


 //Definir uma rota para obter todas os transaçoes
 router.get('./', transactionsController.getAllTransaction);


 //exportando o roteador 

 module.exports = router;