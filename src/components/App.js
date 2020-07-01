import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GearPage from './GearPage';
import ResourcesPage from './ResourcesPage';
import SettlementDetailsPage from './SettlementDetailsPage';
import SurvivorsPage from './SurvivorsPage';
import SettlementList from './SettlementsList';
import '../temp.css';

function App() {
  return (
    <>
    <Switch>
      <Route path="/survivors" component={SurvivorsPage}/>
      <Route path="/settlement" component={SettlementDetailsPage}/>
      <Route path="/resources" component={ResourcesPage}/>
      <Route path="/gear" component={GearPage}/>
      <Route path="/" exact component={SettlementList}/>
    </Switch>
    </>
  );
}

export default App;
