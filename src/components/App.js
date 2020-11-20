import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GearPage from './GearPage';
import ResourcesPage from './ResourcesPage';
import SettlementDetailsPage from './SettlementDetailsPage';
import SurvivorDetailPage from './SurvivorDetailPage';
import SurvivorsPage from './SurvivorsPage';
import SettlementsPage from './SettlementsPage';
import '../temp.css';

function App() {
  return (
    <>
    <Switch>
      <Route path="/survivor/:survivorId" component={SurvivorDetailPage}/>
      <Route path="/survivors" component={SurvivorsPage}/>
      <Route path="/settlement" component={SettlementDetailsPage}/>
      <Route path="/resources" component={ResourcesPage}/>
      <Route path="/gear" component={GearPage}/>
      <Route path="/" exact component={SettlementsPage}/>
    </Switch>
    </>
  );
}

export default App;
