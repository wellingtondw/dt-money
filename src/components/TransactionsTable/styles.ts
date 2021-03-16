import styled from "styled-components";

export const Container = styled.div`

  table {
    width: 100%;
    text-align: left;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1.3rem 2rem;
    }

    td {
      color: var(--text-body);
      padding: 1.3rem 2rem;
      background-color: var(--shape);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

    }
    
  }
`
