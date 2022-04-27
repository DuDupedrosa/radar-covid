import React from 'react';
import { GlobalStyles } from '../styles/Global';
import styled from 'styled-components';

const Error = styled.h1`
  font-family: var(--family-text);
  font-size: 1.25rem;
  font-weight: 500;
  color: tomato;
  padding: 0 1.25rem;
`;

const ErrorBox = styled.div`
  display: grid;
  place-items: center;
`;

const ErrorGraphic = ({ children }) => {
  return (
    <ErrorBox>
      <GlobalStyles />
      <Error>{children}</Error>
    </ErrorBox>
  );
};

export default ErrorGraphic;
