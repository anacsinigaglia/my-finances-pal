import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); //= 1fr 1fr 1fr
  gap: 2rem; //espaçamento do grid
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; //strong por default display: inline
      margin-top: 1rem; //margin-top não funciona em display: inline
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
