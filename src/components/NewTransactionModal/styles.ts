import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--main-text-blue);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--logo-blue);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    font-weight: 600;
    filter: brightness(0.9);

    transition: filter 0.4s;

    &:hover {
      filter: brightness(1);
    }
  }

`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'blue' | 'orange';
}

const colors = {
  blue: '#56ccf2',
  orange: '#EA5212'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive 
    ? transparentize(0.85, colors[props.activeColor]) 
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }
    
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--main-text-blue);
  }
`;