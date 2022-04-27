import React from 'react';
import BiggerIndices from './CovidStates/BiggerIndices';
import SmallerCities from './CovidStates/SmallerCities';
import CheckStateCovid from './CheckStateCovid';
import Head from './Head';

const Home = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // return the data global of covid
  React.useEffect(() => {
    async function getDataCovid() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          'https://covid19-brazil-api.vercel.app/api/report/v1',
        );
        if (response.ok) {
          const json = await response.json();
          setData(json.data);
        }
      } catch {
        setError(
          `Error em carregar o gráfico: verifique sua conexão com a internet ou tente atualizar a página`,
        );
      } finally {
        setLoading(false);
      }
    }
    getDataCovid();
  }, []);

  return (
    <section aria-label="Home">
      <Head
        title="home"
        description="fique por dentro de todas as informações sobre o covid-19"
      />
      <BiggerIndices data={data && data} loading={loading} error={error} />
      <SmallerCities data={data && data} loading={loading} error={error} />
      <CheckStateCovid />
    </section>
  );
};

export default Home;
