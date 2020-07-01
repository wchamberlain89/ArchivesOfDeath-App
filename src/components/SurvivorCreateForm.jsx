import React from 'react';
import { useForm } from 'react-hook-form';
import SurvivorCreateController from './SurvivorCreateController';

const SurvivorCreateForm = ({ settlementId }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  
  return (
    <SurvivorCreateController settlementId={settlementId}>
      { ({ createSurvivor }) => (
        <form onSubmit={handleSubmit((data) => createSurvivor({ name: data.name, gender: data.gender }))}>
          <label for="name">Name</label>
          <input name="name" ref={register({ required: true })} />
          
          <label for="male">Male</label>
          <input type="radio" id="male" name="gender" value="1" ref={register({ required: true })}/>
          
          <label for="female">Female</label>
          <input type="radio" id="female" name="gender" value="2" ref={register({ required: true })}/>

          <input type="submit"/>
        </form>
      )}
    </SurvivorCreateController>
  )
}

export default SurvivorCreateForm;