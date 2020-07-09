import React from 'react';
import { useAPI } from './hooks/useApiService';
import SurvivorsList from './SurvivorsList';
import SurvivorCreateForm from './SurvivorCreateForm';

const SurvivorsPage = (props) => {
  const settlement = props.location.state.settlement;
  const [ survivors, setSurvivors, isLoading ] = useAPI('getSurvivors', settlement.settlementId);
  
  const addSurvivor = (survivor) => {
    setSurvivors([...survivors, survivor])
  }

  if(isLoading) {
    return null
  }

  return (
    <>
      <SurvivorsList settlementId={settlement.settlementId} survivors={survivors} />
      
      <SurvivorCreateForm settlementId={settlement.settlementId} onCreateSurvivor={addSurvivor}/>
         
    </>
  )
}

export default SurvivorsPage