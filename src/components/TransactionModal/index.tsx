import Modal, { Props } from 'react-modal'

type TransactionModalProps = Props

export function TransactionModal(props: TransactionModalProps) {
  return (
    <Modal {...props}>
      <h1>Transaction</h1>
    </Modal>
  )
}