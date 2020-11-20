import React from 'react';
import {upperFirst} from 'lodash';

const SurvivorAttribute = ({ name, value }) => {
  return (
    <div>{upperFirst(name)}: {value}</div>
  )
}

export default SurvivorAttribute;