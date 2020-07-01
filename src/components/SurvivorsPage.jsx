import React from 'react';
import { useAPI } from './hooks/useAPI';
import SurvivorsList from './SurvivorsList';
import SurvivorCreateForm from './SurvivorCreateForm';

const SurvivorsPage = (props) => {
  const settlement = props.location.state.settlement;
  const [ survivors, setSurvivors ] = useAPI('getSurvivors', settlement.settlementId);
  
  return (
    <>
      <SurvivorsList survivors={survivors} />
      
      <SurvivorCreateForm settlementId={settlement.settlementId} />
         
    </>
  )
}

export default SurvivorsPage