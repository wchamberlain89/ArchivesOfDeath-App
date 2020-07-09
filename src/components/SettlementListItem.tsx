import React from 'react';
import { Link } from 'react-router-dom';
import { Settlement } from '../types/interfaces';

type SettlementListItemProps = {
  settlement: Settlement
}

const SettlementListItem = ({settlement}: SettlementListItemProps) => {
  return (
    <li key={settlement.settlementId}>
      {/* Links to Settlement Component passing the settlement object data.*/}
      <Link to={{ pathname: '/settlement', state: { settlement: settlement } }}>
          {settlement.name}
      </Link>
    </li>
  )
}

export default SettlementListItem;