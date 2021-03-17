import Modal, { Props } from 'react-modal'
import closeImg from '../../assets/close.svg'
import * as S from './styles'

type NewTransactionModalProps = Props

export function NewTransactionModal({ onRequestClose,...props}: NewTransactionModalProps) {
  return (
    <Modal {...props} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
      <button type='button' className='react-modal-close' onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal"/>
      </button>
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