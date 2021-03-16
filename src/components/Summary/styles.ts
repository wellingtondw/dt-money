import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  color: var(--text-title);

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;
    margin-top: -5rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3.5rem;
    }

    &:last-child {
      background: var(--green);
      color: #fff;
    }
  }
`