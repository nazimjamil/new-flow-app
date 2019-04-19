// @flow

import React from 'react';
import bootData from 'data/boot.json';

const context: React$Context<$ReadOnlyArray<mixed>> = React.createContext(bootData);

export default context;
