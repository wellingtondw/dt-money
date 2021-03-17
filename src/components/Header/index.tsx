import LogoImg from '../../assets/logo.svg'

import * as S from './styles'

type HeaderProps = {
  openNewTransactionModal: () => void;
}

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={LogoImg} alt='dt-money'/>
        <button type='button' onClick={openNewTransactionModal}>Nova transação</button>
      </S.Content>
    </S.Container>
  ) 
}