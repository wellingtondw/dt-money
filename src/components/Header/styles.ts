import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem 12rem;

  button {
    background: var(--blue-light);
    font-size: 1rem;
    color: #fff;
    border: 0;
    padding: 0 2rem;
    height: 3rem;
    transition: filter 0.2s;
    border-radius: 0.25rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`