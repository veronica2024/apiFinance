const db = require('../config/db'); //importa a conexao com o banco de dados


//funcao para obter todadas as transacoes


const getAllTransaction = (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
        if(err){
            console.error('erro ao obter transações', err);
            res.status(500).send('erro ao obter transações')
            return;
        }
    res.json(results)
    })
}








module.exports ={
    getAllTransaction
}











