import React from 'react';
import { Settlement } from '../types/interfaces';

import SettlementListItem from './SettlementListItem';

type SettlementListProps = {
  settlements: Settlement[]
}

const SettlementsList = ({ settlements }: SettlementListProps) => {
  return (
    <ul>
      {
        settlements.map((settlement) => <SettlementListItem settlement={settlement} />)
      }
    </ul>
  ) 
}

export default SettlementsList;
