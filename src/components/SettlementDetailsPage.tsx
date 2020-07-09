import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Settlement } from '../types/interfaces';

type SettlementLocationState = {
  settlement: Settlement
}

const SettlementDetailsPage = ( props: RouteComponentProps<{}, any, SettlementLocationState > ) => {
  const { settlement } = props.location.state;

  return (
    <>
    <h1>{settlement.name}</h1>
    <Link to={{ pathname: '/resources', state: { settlement: settlement } }}> Resources </Link>
    <Link to={{ pathname: '/gear', state: { settlement: settlement } }}> Gear </Link>
    <Link to={{ pathname: '/survivors', state: { settlement: settlement } }}> Survivors </Link>
    </>
  )
}

export default SettlementDetailsPage;