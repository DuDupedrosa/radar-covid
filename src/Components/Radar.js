import React from 'react';
import CheckStateCovid from './CheckStateCovid';
import Head from './Head';

const Radar = () => {
  return (
    <>
      <Head
        title="Radar"
        description="Faça uma busca de acordo com um estado específico"
      />
      <CheckStateCovid />
    </>
  );
};

export default Radar;
