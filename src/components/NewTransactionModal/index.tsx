import { FormEvent, useState } from 'react'
import Modal, { Props } from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import api from '../../services/api'


import * as S from './styles'

export type TransactionTypeState = 'deposit' | 'withdraw'

type NewTransactionModalProps = Props

export function NewTransactionModal({ onRequestClose,...props}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState<TransactionTypeState>('deposit')
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data  = {
      title,
      value,
      type,
      category
    }

    api.post('/transactions', data)
  }


  return (
    <Modal {...props} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
      <button type='button' className='react-modal-close' onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal"/>
      </button>
      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder='Título' onChange={e => setTitle(e.target.value)} value={title}/>
        <input type="number" placeholder='Valor' onChange={e => setValue(Number(e.target.value))} value={value}/>

        <S.NewTransactionTypeContainer>
            <S.TypeButton 
              type='button' 
              onClick={() => setType('deposit')} 
              isActive={type === 'deposit'} 
              transactionType={type}
            >
              <img src={incomeImg} alt="Entrada"/>
              <span>Entrada</span>
            </S.TypeButton>
            <S.TypeButton 
              type='button' 
              onClick={() => setType('withdraw')} 
              isActive={type === 'withdraw'} 
              transactionType={type}
            >
              <img src={outcomeImg} alt="Saída"/>
              <span>Saída</span>
            </S.TypeButton>
        </S.NewTransactionTypeContainer>

        <input type="text" placeholder='Categoria' onChange={e => setCategory(e.target.value)} value={category}/>

        <button type="submit">Cadastrar</button>
      </S.Container>     
    </Modal>
  )
}