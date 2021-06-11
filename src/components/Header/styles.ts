import styled from 'styled-components';

export const Container = styled.header`
  background: var(--main-text-blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--main-text-blue);
    background: var(--logo-blue);
    filter: brightness(0.9);
    font-weight: 600;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;


    &:hover {
      filter: brightness(1.1);
    }
  }
`;