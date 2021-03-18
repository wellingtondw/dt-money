import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransaction } from '../../hooks/useTransaction'

import * as S from './styles'

export function Summary() {
  const { transactions } = useTransaction()

  const summary = transactions.reduce((acc, current) => {

    if(current.type === 'deposit') {
      acc.deposit += current.amount
      acc.total += current.amount
    }else {
      acc.withdraw += current.amount
      acc.total -= current.amount
    }

    return acc
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas'/>
        </header>

        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposit)
          }
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt='Saídas'/>
        </header>

        <strong>
          - {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraw)
          }
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total'/>
        </header>

        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)
          }
        </strong>
      </div>
    </S.Container>
  )
}