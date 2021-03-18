import { useEffect, useState } from 'react'
import api from '../../services/api'
import * as S from './styles'

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions').then(res => setTransactions(res.data.transactions))
  }, [])

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {
                  new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)
                }
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </S.Container>
  )
}