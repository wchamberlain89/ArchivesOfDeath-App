import React from 'react';
import { Settlement } from '../types/interfaces';

import SettlementListItem from './SettlementListItem';

type ComponentProps = {
  settlements: Settlement[]
}

const SettlementsList = ({ settlements }: ComponentProps) => {
  return (
    <ul>
      {
        settlements.map((settlement) => <SettlementListItem settlement={settlement} />)
      }
    </ul>
  ) 
}

export default SettlementsList;
