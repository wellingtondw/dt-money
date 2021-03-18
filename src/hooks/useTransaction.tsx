import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../services/api";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id'| 'createdAt'>

type TransactionsContextState = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void> ;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext({} as TransactionsContextState)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions').then(res => setTransactions(res.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transactions: transaction } = response.data
    
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}


export function useTransaction() {
  const context = useContext(TransactionsContext)    

  return context
}