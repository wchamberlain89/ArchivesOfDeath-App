import React from 'react';

const SurvivorsList = ({ survivors }) => {
  return (
    <ul>
      {survivors.map(survivor => (
        <li>{survivor.name}</li>
      ))}
    </ul>
  )
}

export default SurvivorsList;