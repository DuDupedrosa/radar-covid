import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/Global';

const Paragraph = styled.p`
  font-family: var(--family-text);
  color: var(--color-3);
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.125rem;
  @media (max-width: 37.5rem) {
    font-size: 1rem;
  }
`;

const TextMain = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Paragraph>{children}</Paragraph>
    </>
  );
};

export default TextMain;
