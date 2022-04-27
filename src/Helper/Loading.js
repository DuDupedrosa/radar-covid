import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { GlobalStyles } from '../styles/Global';

// animation to rotation and creat the
// illusion of a loading rotate
const rotation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingDiv = styled.div`
  &::after {
    content: '';
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border: 0.625rem solid var(--color-1);
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${rotation} 0.8s infinite;
  }
`;

// always alignment center
const LoadingBox = styled.div`
  display: grid;
  place-items: center;
`;

const Loading = () => {
  return (
    <LoadingBox>
      <GlobalStyles />
      <LoadingDiv></LoadingDiv>
    </LoadingBox>
  );
};

export default Loading;
