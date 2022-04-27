import React from 'react';
import { GlobalStyles } from '../styles/Global';
import styled from 'styled-components';

const FooterBg = styled.footer`
  background: var(--color-1);
  height: 5rem;
`;

const FooterText = styled.p`
  font-family: var(--family-title);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-4);
`;

const FooterGrid = styled.div`
  display: grid;
  place-items: center;
  padding-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterBg>
      <GlobalStyles />
      <FooterGrid>
        <FooterText>Covid-in todos os direitos reservados</FooterText>
      </FooterGrid>
    </FooterBg>
  );
};

export default Footer;
