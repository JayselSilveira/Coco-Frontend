import React from 'react';

import { ChartsHeader, Analysis as AnalysisChart } from '../../components';

const Analysis = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Analysis" title="Analysis" />
    <div className="w-full">
      <AnalysisChart />
    </div>
  </div>
);

export default Analysis;
