import React from 'react';
import _ from 'lodash';

const SurvivorAttribute = ({ name, value }) => {
  return (
    <div>{_.upperFirst(name)}: {value}</div>
  )
}

export default SurvivorAttribute;