import React from 'react';
import { GlobalStyles } from '../../styles/Global';
import styled from 'styled-components';

const InputComponent = styled.input`
  font-family: var(--family-text);
  font-size: 1rem;
  color: var(--color-3);
  padding: 1rem;
  background: #caf0f8;
  border: none;
  border-radius: 0.25rem 0 0 0.25rem;
  min-width: 22.5rem;
  border: 2px solid transparent;
  @media (max-width: 28.75rem) {
    min-width: max-content;
  }
  &:focus,
  &:hover {
    outline: none;
    border-color: var(--color-2);
  }
`;
const InputBox = styled.div``;

const Input = ({ type, id, onChange, onBlur, ...props }) => {
  return (
    <InputBox>
      <GlobalStyles />
      <InputComponent
        type={type}
        id={id}
        name={id}
        {...props}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputBox>
  );
};

export default Input;
