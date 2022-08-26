import React from 'react';

import { ChartsHeader, Bar as BarChart } from '../../components';

const Bar = () => (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Disease Analysis" />
      <div className=" w-full">
        <BarChart />
      </div>
    </div>
  );

export default Bar;
