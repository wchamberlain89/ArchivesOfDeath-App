import React from 'react';

const SurvivorsPage = () => {
  const settlement = props.location.state.settlement;
  const [ survivors, setSurvivors ] = useAPI('getSurvivors', settlementId);
  
  return (
    <>
      <SurvivorsList survivors={survivors} />
      <CreateSurvivorController>
        {
          (createSurvivor) => {
            <CreateSurvivorForm settlementId={settlement.settlementId} onCreateSurvivor={createSurvivor}/>
          }
        }
      </CreateSurvivorController>
    </>
  )
}

export default SurvivorsPage