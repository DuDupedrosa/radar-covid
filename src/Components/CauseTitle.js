import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/Global';

const TitleCause = styled.h3`
  font-weight: bold;
  font-family: var(--family-title);
  color: var(--color-4);
  margin-bottom: 0.5rem;
`;

const CauseTitle = ({ children }) => {
  return (
    <TitleCause>
      <GlobalStyles />
      {children}
    </TitleCause>
  );
};

export default CauseTitle;
