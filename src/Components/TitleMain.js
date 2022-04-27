import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/Global';

const Title = styled.h1`
  font-family: var(--family-title);
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-4);
  letter-spacing: 0.015rem;
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 0.25rem;
    background: var(--color-1);
    z-index: -1;
    position: absolute;
    left: -0.375rem;
    bottom: 0.5rem;
    @media (max-width: 37.5rem) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  @media (max-width: 37.5rem) {
    font-size: 42px;
  }
`;

const TitleMain = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Title>{children}</Title>
    </>
  );
};

export default TitleMain;
