import React from 'react';
import styled from 'styled-components';
import { GlobalStyles, ContainerMain } from '../../styles/Global';
import TitleMain from '../TitleMain';
import TextMain from '../TextMain';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import Loading from '../../Helper/Loading';
import FiveBiggerCities from './FiveBiggerCities';
import SubTitleMain from '../SubTitleMain';
import ErrorGraphic from '../../Helper/ErrorGraphic';
import CallActionRadar from '../../Helper/CallActionRadar';
import CauseTitle from '../CauseTitle';

const BiggerIndicesSection = styled.section`
  margin-top: 4rem;
`;

const BiggerIndicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 56.25rem) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const BiggerCitiesText = styled.div`
  margin-top: 4rem;
`;

const FiveBiggerCitiesDiv = styled.div`
  grid-column: 1 / -1;
`;

const BiggerIndices = ({ data, loading, error }) => {
  const dataBiggerCities =
    data &&
    data.filter((state) => {
      return state.deaths > 18000;
    });

  const biggerCitiesGrafic =
    dataBiggerCities &&
    dataBiggerCities.map((state) => {
      return {
        x: state.uf,
        y: state.deaths,
      };
    });

  return (
    <BiggerIndicesSection>
      <GlobalStyles />
      <ContainerMain>
        <TitleMain>Maiores índices:</TitleMain>
        <BiggerIndicesGrid>
          <BiggerCitiesText>
            <SubTitleMain>
              Estados com os maiores índices de óbitos.
            </SubTitleMain>
            <CauseTitle>Causas possíveis para este resultado:</CauseTitle>
            <TextMain>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              libero blanditiis cupiditate ratione pariatur, nesciunt dolore
              dolorem ullam ipsam, distinctio aperiam rerum. Dolorum, eveniet
              quam amet quaerat fuga maxime assumenda! <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis similique voluptatum, quibusdam soluta placeat numquam,
              tempore officia totam deserunt voluptas rerum neque harum quas
              odit magni iure obcaecati quis. Accusantium.
            </TextMain>
            <CallActionRadar />
          </BiggerCitiesText>
          {loading ? (
            <Loading />
          ) : (
            <div>
              {error ? (
                <ErrorGraphic>{error}</ErrorGraphic>
              ) : (
                <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
                  <VictoryAxis
                    tickFormat={
                      biggerCitiesGrafic &&
                      biggerCitiesGrafic.map((item) => item.x)
                    }
                  />
                  <VictoryAxis
                    dependentAxis
                    tickFormat={(y) => y / 1000 + 'mil'}
                  />
                  <VictoryBar
                    data={biggerCitiesGrafic}
                    style={{
                      data: {
                        fill: '#00b4d8',
                        stroke: '#00b4d8',
                        strokeWidth: '1px',
                        fillOpacity: '0.7',
                      },
                    }}
                  />
                </VictoryChart>
              )}
            </div>
          )}
          {/* the five bigger cities component */}
          {loading ? (
            <Loading />
          ) : (
            <FiveBiggerCitiesDiv>
              {error ? (
                <ErrorGraphic>{error}</ErrorGraphic>
              ) : (
                <FiveBiggerCities data={data && data} />
              )}
            </FiveBiggerCitiesDiv>
          )}
        </BiggerIndicesGrid>
      </ContainerMain>
    </BiggerIndicesSection>
  );
};

export default BiggerIndices;
