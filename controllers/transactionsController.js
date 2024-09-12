
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
// com verificação de duplicidade
const addTransaction = (req,res) => {
    const {date, amount, description, category, account, user_id} = req.body;

// veificar se a transação já existe

db.query(
  'SELECT * FROM transactions WHERE date=?, AND amout=?, AND description=?, AND account=?, user_id=? values (?,?,?,?,?,?)',
  [date, amount, description, category, account, user_id],
  (err,results) => {
    if(err) {
        console.error('Erro ao adicionar transação', err);
        res.status(500).send('Erro ao adicionar transação');
        return;
    }
   if(results.length>0){
    //se a transação já existe
    res.status(400).send('transação duplicada')
   }
  }
)




//se atransação não existe - insira-a ao banco de dados
    db.query(
        'INSERT INTO transactions (date, amount, description, category, account, user_id) VALUES (?,?,?,?,?,?)',
        [date, amount, description, category, account, user_id],
        (err,results) => {
            if(err) {
                console.error('Erro ao adicionar transação', err);
                res.status(500).send('Erro ao adicionar transação');
                return;
            }

            //verificar se nenhuma lina foi afetada pele consulta

            if(results.affectedRows===0){
              res.status(404).send('transação não encontrada');
              return;
            }


            res.send('Transação atualizada com sucesso');
        }

    );
  };






//Função para atualizar uma transação existente (substituição completa)
const updateTransactionPut = (req, res) => {
  const{id} = req.params;
  const {date, amount, description, category, account, user_id} = req.body;
  db.query(
    'UPDATE transactions SET date = ?, amount = ?, description = ?, category = ?, account = ?, user_id = ? WHERE id = ?',
    [date, amount, description, category, account, user_id,id],
    (err,results) => {
      if(err) {
          console.error('Erro ao adicionar transação', err);
          res.status(500).send('Erro ao adicionar transação');
      return;
    }
    if(results.affectedRows===0){
      res.status(404).send('transação não encontrada');
      return;
    }


    res.send('Transação atualizada com sucesso');
}

);
};
  
  
  //Função para atualizar uma transação existente (substituição parcial)
  const updateTransactionPatch = (req, res) => {
  const{id} = req.params;
  const fields = req.body;
  const query = [];
  const values = [];
  
  for(const[key,value] of Object.entries(fields)) {
    query.push(`${key} = ?`);
    values.push(value);
  }
  values.push(id);

  db.query(
    `UPDATE transactions SET ${query.join(',')} WHERE id = ?`,
    values,
    (err,results) => {
      if(err) {
          console.error('Erro ao atualizar transação', err);
          res.status(500).send('Erro ao adicionar transação');
          return;
      }
      if(results.affectedRows===0){
        res.status(404).send('transação não encontrada');
        return;
      }


      res.send('Transação atualizada com sucesso');
  }

);
};
  
  //função para deletar uma transacação

  const deleteTransaction = (req,res) => {
const{id} = req.params;
db.query ('DELETE FROM transactions WHERE id = ?', [id],
(err,results) => {
  if(err) {
    console.error('Erro ao deletar transação', err);
    res.status(500).send('Erro ao deletar transação');
return;
}
if(results.affectedRows===0){
  res.status(404).send('transação não encontrada');
  return;
}

res.send('Transação deletada com sucesso');
}
);
  };



  
  
  module.exports = {
    getAllTransactions,
    addTransaction,
    updateTransactionPut,
    updateTransactionPatch,
    deleteTransaction
  };
