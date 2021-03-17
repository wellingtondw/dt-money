import Modal, { Props } from 'react-modal'

import * as S from './styles'

type NewTransactionModalProps = Props

export function NewTransactionModal(props: NewTransactionModalProps) {
  return (
    <Modal {...props} overlayClassName='react-modal-overlay' className='react-modal-content'>
      <S.Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder='Título'/>
        <input type="number" placeholder='Valor'/>
        <input type="text" placeholder='Categoria'/>

        <button type="submit">Cadastrar</button>
      </S.Container>     
    </Modal>
  )
}