import React from 'react';
import styled from 'styled-components';
import { GlobalStyles, ContainerMain } from '../styles/Global';
import TitleMain from './TitleMain';
import contact from '../Assets/contact.jpg';
import Head from './Head';

const SectionContact = styled.section`
  margin-top: 2rem;

  @media (max-width: 50rem) {
    margin-bottom: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;

const ContactImg = styled.div`
  img {
    border-radius: 0.25rem;
  }
`;

const ContactList = styled.ul`
  display: grid;
  align-content: start;
  gap: 1.25rem;
`;

const ContactListItem = styled.li`
  a {
    font-family: var(--family-text);
    color: var(--color-4);
    font-weight: 500;
    font-size: 1.25rem;
    letter-spacing: 0.15rem;
    transition: 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 3px;
      background: var(--color-2);
      transition: 0.2s;
    }
    @media (max-width: 37.5rem) {
      font-size: 1.125rem;
    }
  }
`;
const ContactLinks = styled.a`
  :hover::before {
    width: 1.25rem;
  }
`;

const Contact = () => {
  return (
    <SectionContact>
      <GlobalStyles />
      <Head
        title="Contato"
        description="Entre em contato conosco e solucione sua dúvida/problema"
      />
      <ContainerMain>
        <TitleMain>Contato:</TitleMain>
        <ContactGrid>
          <ContactImg>
            <img src={contact} alt="Contato" />
          </ContactImg>
          <ContactList>
            <ContactListItem>
              <ContactLinks href="mailto:contato@gmail.com" target="_blank">
                contato@gmail.com
              </ContactLinks>
            </ContactListItem>
            <ContactListItem>
              <ContactLinks href="tel:+55 (99) 99999-9999" target="_blank">
                +55 (99) 99999-9999
              </ContactLinks>
            </ContactListItem>
            <ContactListItem>
              <ContactLinks
                href="https://www.google.com.br/maps"
                target="_blank"
              >
                Rua log ali, Rj-centro
              </ContactLinks>
            </ContactListItem>
          </ContactList>
        </ContactGrid>
      </ContainerMain>
    </SectionContact>
  );
};

export default Contact;
