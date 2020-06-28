import React from 'react';
import { Link } from 'react-router-dom';
import ResourcesPage from './ResourcesPage';
import GearPage from './GearPage';

const SettlementDetailsPage = ( props ) => {
  const { settlement } = props.location.state;

  return (
    <>
    <h1>{settlement.name}</h1>
    <Link to={{ pathname: '/resources', state: { settlement: settlement } }}> Resources </Link>
    <Link to={{ pathname: '/gear', state: { settlement: settlement } }}> Gear </Link>
    </>
  )
}

export default SettlementDetailsPage;