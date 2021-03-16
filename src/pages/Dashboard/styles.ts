import styled from "styled-components";

import { Container as TransactionsTableContainer } from '../../components/TransactionsTable/styles'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto; 

  ${TransactionsTableContainer} {
    margin-top: 4rem;
  }
`