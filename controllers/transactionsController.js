
const db = require('../config/db'); // Importa a conexão com o banco de dados

// Função para obter todas as transações
const getAllTransactions = (req, res) => {
  db.query('SELECT * FROM transactions', (err, results) => {
    if (err) {
      console.error('Erro ao obter transações:', err);
      res.status(500).send('Erro ao obter transações');
      return;
    }
    res.json(results);
  });
};


//Função para adicionar uma nova transação
const addTransaction = (req,res) => {
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        'INSERT INTO transactions (date, amount, description, category, account, user_id) VALUES (?,?,?,?,?,?)',
        [date, amount, description, category, account, user_id],
        (err,results) => {
            if(err) {
                console.error('Erro ao adicionar transação', err);
                res.status(500).send('Erro ao adicionar transação');
                return;
            }
            res.status(201).send('Transação adicionada com sucesso');
        }

    );

};

//funcao para atualizar uma transaçao existente(substituição completa)
const updateTransactionsPunt = (req, res) =>{
    const{id} = req.params;
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
       'UPDATE transaction SET date=?, amount=?, description=?, category=?, account=?, user_id=? WHERE id=?',
       [date, amount, description, category, account, user_id, id],
      (err, results) => {
        if(err){
            console.error('errro ao adicionar transação', err);
            res.send(500).send('erro ao adicionar transação');
            return;
        }
        res.send('Transação atualizada com sucesso');
      }
    )
} 

module.exports = {
  getAllTransactions,
  addTransaction,
  updateTransactionsPunt
};
