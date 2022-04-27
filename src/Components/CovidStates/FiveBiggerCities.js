import React from 'react';
import { GlobalStyles, ContainerMain } from '../../styles/Global';
import styled from 'styled-components';
import SubTitleMain from '../SubTitleMain';
import { VictoryPie, VictoryTheme } from 'victory';
import useMedia from '../../Hooks/useMedia';
import CallActionRadar from '../../Helper/CallActionRadar';

const FiveCitiesBox = styled.section``;

const TableData = styled.table`
  border-collapse: collapse;
  thead {
    th {
      font-family: var(--family-title);
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: 0.015rem;
      color: var(--color-4);
      border: 2px solid var(--color-4);
      padding: 1rem;
      @media (max-width: 37.5rem) {
        font-size: 1rem;
        padding: 0.6rem;
      }
    }
  }
  tbody {
    tr {
      td {
        font-family: var(--family-text);
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        color: var(--color-4);
        padding: 0.8rem;
        letter-spacing: 0.015rem;
        border: 2px solid var(--color-4);
        @media (max-width: 37.5rem) {
          font-size: 0.875rem;
          padding: 0.4rem;
          letter-spacing: 0;
        }
      }
      td:first-child {
        color: var(--color-2);
      }
    }
  }
`;

const FiveCitiesGraphic = styled.div`
  @media (max-width: 56.25rem) {
    justify-self: center;
  }
`;

const CallAction = styled.div`
  position: absolute;
  bottom: -32px;
`;

const TableBox = styled.div`
  position: relative;
  justify-self: center;
  align-self: center;
`;

const FiveCitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 2rem;
  @media (max-width: 56.25rem) {
    grid-template-columns: 1fr;
  }
`;

const FiveBiggerCities = ({ data }) => {
  const match = useMedia('(max-width: 37.5rem)');

  const fiveStates =
    data &&
    data.filter((state) => {
      return state.deaths > 30000;
    });

  const fiveStatesGraphic =
    data &&
    fiveStates.map((state) => {
      return {
        x: state.uf,
        y: state.deaths,
      };
    });

  return (
    <FiveCitiesBox>
      <GlobalStyles />
      <ContainerMain>
        <SubTitleMain>Os cinco estados mais afetados:</SubTitleMain>
        <FiveCitiesGrid>
          <FiveCitiesGraphic>
            <VictoryPie
              theme={VictoryTheme.material}
              innerRadius={20}
              data={fiveStatesGraphic}
              style={{
                data: {
                  stroke: '#fff',
                  strokeWidth: '1px',
                  opacity: 0.9,
                },
                labels: {
                  fill: '#111111',
                  fontFamily: 'poppins',
                  fontSize: '18px',
                  letterSpacing: '0.24px',
                  fontWeight: '600',
                },
              }}
              colorScale={[
                '#03045e',
                '#023e8a',
                '#0096c7',
                '#00b4d8',
                '#48cae4',
              ]}
            />
          </FiveCitiesGraphic>
          <TableBox>
            <TableData>
              <thead>
                <tr>
                  <th>Estado</th>
                  <th>Óbitos</th>
                  <th>Casos confirmados</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td></td>
                </tr>
              </tfoot>
              <tbody>
                {match && (
                  <tr>
                    <td>-----</td>
                    <td>(Mil)</td>
                    <td>(Mil)</td>
                  </tr>
                )}
                {fiveStates &&
                  fiveStates.map((state) => {
                    return (
                      <tr key={state.uf}>
                        <td>{state.uf}</td>
                        <td>{`${state.deaths} ${match ? '' : 'mil'}`}</td>
                        <td>{`${state.cases}  ${match ? '' : 'mil'}`}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </TableData>
            <CallAction>
              <CallActionRadar />
            </CallAction>
          </TableBox>
        </FiveCitiesGrid>
      </ContainerMain>
    </FiveCitiesBox>
  );
};

export default FiveBiggerCities;
