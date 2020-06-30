import React from 'react';
import { useForm } from 'react-hook-form';
import { useAPI } from './hooks/useAPI';
import GearCreateController from './GearCreateController';

const GearCreateForm = ({ settlementId, onCreateGear }) => {
  const { register, handleSubmit } = useForm();
  const [ gear, setGear, isLoading, error ] = useAPI('getGearAssets');
  return (
    <>
      <select name="gear" id="gearId" ref={register}>
        {gear.map((gearItem) => {
          return (
            <option value={gearItem.gearId}>{gearItem.name}</option>
          )
        })}
      </select>
      <GearCreateController settlementId={settlementId} onCreateGear={onCreateGear}>
        {({ createGear }) => (
          <button onClick={handleSubmit((data) => createGear(data.gear))}>Add Gear</button>
        )}
      </GearCreateController>
    </>
  )
}

export default GearCreateForm;