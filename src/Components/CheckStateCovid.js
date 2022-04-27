import React from 'react';
import TitleMain from './TitleMain';
import { GlobalStyles, ContainerMain } from '../styles/Global';
import styled from 'styled-components';
import SubTitleMain from './SubTitleMain';
import Input from './Form/Input';
import ButtonSearch from './Form/ButtonSearch';
import { keyframes } from 'styled-components';
import Loading from '../Helper/Loading';

const CheckStateBox = styled.section`
  margin-top: 4rem;
  padding-bottom: 7.5rem;
`;

const CheckContent = styled.div`
  display: grid;
  place-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const FormChecked = styled.form`
  display: flex;
  align-items: center;
  max-width: max-content;
  position: relative;
  div {
    flex: 1;
  }
`;

const ButtonSearchBox = styled.div``;

const animeLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-40px,0,0);
  }
  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

const DataBox = styled.div`
  background: var(--color-1);
  padding: 1rem;
  border-radius: 0.25rem;
  display: grid;
  gap: 1rem;
  margin-top: 3rem;
  z-index: 100;
  transition: 0.3s;
  animation: ${animeLeft} 0.6s forwards;
  p {
    font-family: var(--family-text);
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--color-3);
  }
  h2 {
    font-family: var(--family-title);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-3);
    margin-bottom: 0.25rem;
  }
`;

const ErrorCheck = styled.p`
  font-size: 0.875rem;
  font-family: var(--family-title);
  color: tomato;
  text-transform: uppercase;
  position: absolute;
  bottom: -35px;
  left: 0;
  font-weight: 600;
  z-index: 10000;
  animation: ${animeLeft} 0.4s forwards;
  @media (max-width: 28.75rem) {
    bottom: -45px;
  }
`;

const ErrorNotFound = styled.p`
  font-size: 1rem;
  font-family: var(--family-title);
  color: green;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 3rem;
`;

const CheckStateCovid = () => {
  const [element, setElement] = React.useState('');
  const [data, setData] = React.useState(null);
  const [errorValidade, setErrorValidade] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [errorFetch, setErrorFetch] = React.useState(null);

  function validate(value) {
    if (value.length === 0) {
      setErrorValidade('Digite um valor no campo para efetuar uma pesquisa');
      return false;
    } else {
      setErrorValidade(null);
      return true;
    }
  }

  function handleBlur() {
    validate(element);
  }

  function handleChange({ target }) {
    setElement(target.value);
    if (errorValidade) validate(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validate(element)) {
      try {
        setData(null);
        setLoading(true);
        setErrorFetch(null);
        const response = await fetch(
          `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${element}`,
        );
        const json = await response.json();
        if (json.error)
          throw new Error(
            `${json.error} digite um uf válido e faça uma nova busca`,
          );
        setData(json);
      } catch (err) {
        setErrorFetch(err.message);
      } finally {
        setLoading(false);
        setElement('');
      }
    }
  }
  return (
    <CheckStateBox>
      <ContainerMain>
        <GlobalStyles />
        <TitleMain>Buscar por estado:</TitleMain>
        <CheckContent>
          <SubTitleMain>Digite um UF válido:</SubTitleMain>
          {loading ? (
            <Loading />
          ) : (
            <FormChecked onSubmit={handleSubmit}>
              <Input
                id="uf"
                type="text"
                placeholder="UF =  Rj"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errorValidade && <ErrorCheck>{errorValidade}</ErrorCheck>}
              <ButtonSearchBox>
                <ButtonSearch />
              </ButtonSearchBox>
            </FormChecked>
          )}
          {data && !errorFetch && (
            <DataBox>
              <h2>Estado: {data.state}</h2>
              <p>Casos confirmados: {data.cases}</p>
              <p>Óbitos: {data.deaths}</p>
              <p>Casos suspeitos: {data.suspects}</p>
              <p>Casos recusados: {data.refuses}</p>
            </DataBox>
          )}
          {errorFetch && <ErrorNotFound>{errorFetch}</ErrorNotFound>}
        </CheckContent>
      </ContainerMain>
    </CheckStateBox>
  );
};

export default CheckStateCovid;
