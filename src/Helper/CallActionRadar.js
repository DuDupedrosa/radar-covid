import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/Global';
import { ReactComponent as Arrow } from '../Assets/arrow.svg';

const CallAction = styled.div`
  a {
    font-family: var(--family-title);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-1);
    transition: 0.2s;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    max-width: max-content;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: currentColor;
      margin-top: 2px;
      position: absolute;
      bottom: -4px;
    }
    svg {
      transition: 0.3s;
    }
    &:hover svg {
      transform: translateX(8px);
    }
  }
`;

const CallActionRadar = () => {
  return (
    <CallAction>
      <GlobalStyles />
      <Link to="/radar">
        Busca por região específica: <Arrow />
      </Link>
    </CallAction>
  );
};

export default CallActionRadar;
