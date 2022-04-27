import React from 'react';
import { GlobalStyles } from '../styles/Global';
import styled from 'styled-components';

const SubTitle = styled.h2`
  font-family: var(--family-title);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-4);
  margin-bottom: 1.25rem;
  &::after {
    content: '';
    display: block;
    width: 3.75rem;
    height: 0.1875rem;
    border-radius: 0.25rem;
    background: var(--color-2);
  }
  @media (max-width: 37.5rem) {
    font-size: 1.25rem;
  }
`;

const SubTitleMain = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <SubTitle>{children}</SubTitle>
    </>
  );
};

export default SubTitleMain;
