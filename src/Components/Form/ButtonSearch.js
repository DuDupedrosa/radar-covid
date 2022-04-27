import React from 'react';
import { GlobalStyles } from '../../styles/Global';
import styled from 'styled-components';
import { ReactComponent as Search } from '../../Assets/search.svg';

const Button = styled.button`
  background: var(--color-1);
  cursor: pointer;
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 0.9rem 1.5rem;
  border: none;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 0 2px var(--color-2);
  }
`;

const ButtonSearch = () => {
  return (
    <Button>
      <GlobalStyles />
      <Search />
    </Button>
  );
};

export default ButtonSearch;
