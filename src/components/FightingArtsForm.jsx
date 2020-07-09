import React from 'react';
import { useForm } from 'react-hook-form';
import { useAPI } from './hooks/useApiService';
import ApiController from './ApiServiceController';

const FightingArtsForm = ({ survivorId, settlementId }) => {
  const { handleSubmit, register } = useForm();
  const [ fightingArts, setFightingArts, error, loading ] = useAPI('getFightingArts');
  console.log(settlementId, survivorId)
  return (
    <ApiController method="createSurvivorFightingArt">
      {({ makeRequest, isLoading }) => (
        <form onSubmit={handleSubmit((data) => makeRequest(settlementId, survivorId, { fightingArtId : data.fightingArts } ))} >
          <select name="fightingArts" id="fightingArtId" ref={register}>
            <option value={null} disabled={true}>Select FightingArt</option>
            {fightingArts.map(fightingArt => <option value={fightingArt.fightingArtId}>{fightingArt.name}</option>)}
          </select>
          <input type="submit"/>
        </form>
      )}
    </ApiController>
  )
}

export default FightingArtsForm;