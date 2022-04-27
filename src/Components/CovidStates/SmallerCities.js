import React from 'react';
import TitleMain from '../TitleMain';
import { GlobalStyles, ContainerMain } from '../../styles/Global';
import styled from 'styled-components';
import SubTitleMain from '../SubTitleMain';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import Loading from '../../Helper/Loading';
import ErrorGraphic from '../../Helper/ErrorGraphic';
import CauseTitle from '../CauseTitle';
import TextMain from '../TextMain';
import CallActionRadar from '../../Helper/CallActionRadar';

const SmallerCitiesBox = styled.section`
  margin-top: 4rem;
`;

const SmallerCitiesGraphic = styled.div``;

const SmallerCitiesText = styled.div`
  align-self: center;
`;

const SmallerCitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;
  @media (max-width: 56.25rem) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const SmallerCities = ({ data, loading, error }) => {
  const dataSmallerCities =
    data &&
    data.filter((state) => {
      return state.deaths < 10500;
    });

  const smallerCitiesGraphic =
    dataSmallerCities &&
    dataSmallerCities.map((state) => {
      return {
        x: state.uf,
        y: state.deaths,
      };
    });

  return (
    <SmallerCitiesBox>
      <ContainerMain>
        <GlobalStyles />
        <TitleMain>Menores índices:</TitleMain>
        <SmallerCitiesGrid>
          <SmallerCitiesGraphic>
            <SubTitleMain>
              Estados com os menores índices de óbitos.
            </SubTitleMain>
            {loading ? (
              <Loading />
            ) : (
              <div>
                {error ? (
                  <ErrorGraphic>{error}</ErrorGraphic>
                ) : (
                  <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: 10 }}
                  >
                    <VictoryAxis
                      dependentAxis
                      tickFormat={(y) => y / 1000 + 'mil'}
                    />
                    <VictoryAxis
                      tickFormat={
                        smallerCitiesGraphic &&
                        smallerCitiesGraphic.map((item) => item.x)
                      }
                    />
                    <VictoryBar
                      horizontal
                      data={smallerCitiesGraphic && smallerCitiesGraphic}
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
          </SmallerCitiesGraphic>
          <SmallerCitiesText>
            <CauseTitle>Causas possíveis para este resultado:</CauseTitle>
            <TextMain>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ab assumenda fugit quae repellendus minus voluptatibus
              impedit quas accusantium mollitia voluptas quaerat aut dolorem,
              facere et explicabo quam similique! Saepe? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Maiores itaque unde cupiditate
              ullam atque, voluptatem vero aut! Laudantium, quae sit eligendi,
              sapiente fuga perferendis et quis hic, nemo facilis
              exercitationem?
            </TextMain>
            <CallActionRadar />
          </SmallerCitiesText>
        </SmallerCitiesGrid>
      </ContainerMain>
    </SmallerCitiesBox>
  );
};

export default SmallerCities;
