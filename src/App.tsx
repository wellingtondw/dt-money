import { useState } from 'react';
import { createServer } from 'miragejs'
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { TransactionModal } from './components/TransactionModal'


createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          amount: 35,
          type: 'deposit',
          category: 'Sale',
          createdAt: new Date()
        }
      ]
    })
  }
})

Modal.setAppElement('#root')

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  const handleOpenTransactionModal = () => {
    setIsTransactionModalOpen(true)
  }

  const handleCloseTransactionModal = () => {
    setIsTransactionModalOpen(false)
  }

  return (
    <>
      <Header openNewTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />
      <TransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseTransactionModal}/>
      <GlobalStyle />
    </>
  );
}
