import React from 'react';

import { ChartsHeader, abc } from '../../components';

const def = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Line" title="Activity Growth" />
    <div className="w-full">
      <abc />
    </div>
  </div>
);

export default def;