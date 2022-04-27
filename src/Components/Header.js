import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import useMedia from '../Hooks/useMedia';
import { GlobalStyles, ContainerMain } from '../styles/Global';
import { keyframes } from 'styled-components';

// background geral
const HeaderBg = styled.header`
  background: var(--color-1);
`;

// header's content
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
`;

const HeaderNav = styled.nav``;

const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    font-family: var(--family-text);
    font-size: 1.125rem;
    color: var(--color-5);
    font-weight: 500;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    padding: 0.5rem 0;
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: var(--color-5);
      transition: 0.3s;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const animeMenu = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-30px,0,0);
  }
  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

const HeaderNavMobileLinks = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  background: var(--color-2);
  border-radius: 0.25rem;
  padding: 1.25rem;
  transition: 0.3s;
  z-index: 100;
  display: ${({ state }) => (state ? 'grid' : 'none')};
  gap: 1.5rem;
  transition: 0.3s;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  animation: ${animeMenu} 0.4s forwards;
  a {
    font-family: var(--family-text);
    font-size: 1rem;
    color: var(--color-5);
    font-weight: 500;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &::before {
      content: '';
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--color-5);
    }
  }
`;

// menu button
const ButtonMenuMobile = styled.button`
  background: var(--color-2);
  padding: 1.3rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &::before {
    content: '';
    display: inline-block;
    width: 2rem;
    height: 0.1875rem;
    background: var(--color-5);
    box-shadow: 0 0.5rem var(--color-5), 0 -0.5rem var(--color-5);
    transition: 0.3s;
  }
`;

const Header = () => {
  const mobile = useMedia('(max-width: 50rem)');
  const [menuActive, setMenuActive] = React.useState(false);

  function handleClick() {
    setMenuActive(!menuActive);
  }

  return (
    <HeaderBg>
      <GlobalStyles />
      <ContainerMain>
        <HeaderContent>
          <Link to="/">
            <Logo />
          </Link>
          <HeaderNav aria-label="Navegação primária">
            {mobile && (
              <ButtonMenuMobile
                onClick={handleClick}
                aria-label="menu"
              ></ButtonMenuMobile>
            )}
            {mobile ? (
              <HeaderNavMobileLinks state={menuActive}>
                <Link to="/radar" onClick={handleClick}>
                  Radar
                </Link>
                <Link to="/contato" onClick={handleClick}>
                  Contato
                </Link>
              </HeaderNavMobileLinks>
            ) : (
              <HeaderNavLinks>
                <Link to="/radar">Radar</Link>
                <Link to="/contato">Contato</Link>
              </HeaderNavLinks>
            )}
          </HeaderNav>
        </HeaderContent>
      </ContainerMain>
    </HeaderBg>
  );
};

export default Header;
