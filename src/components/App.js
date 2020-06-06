import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemsList from './ItemsList';
import CreateSettlement from './CreateSettlement';
import SettlementList from './SettlementsList';
import Settlement from './Settlement';
import '../temp.css';

function App() {
  return (
    <>
    <Switch>
      <Route path="/settlement" component={Settlement}/>
      <Route path="/" exact component={SettlementList}/>
    </Switch>
    </>
  );
}

export default App;
