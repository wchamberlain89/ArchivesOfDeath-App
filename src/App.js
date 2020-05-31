import React from 'react';
import ItemsList from './components/ItemsList';
import CreateSettlement from './components/CreateSettlement';
import SettlementList from './components/SettlementsList';
import './temp.css';
function App() {
  return (
    <>
    <CreateSettlement/>
    <SettlementList/>
    <ItemsList/>
    </>
  );
}

export default App;
