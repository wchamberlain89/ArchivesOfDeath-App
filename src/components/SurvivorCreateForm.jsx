import React from 'react';
import { useForm } from 'react-hook-form';
import ApiController from './ApiController';

const SurvivorCreateForm = ({ settlementId, onCreateSurvivor }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  
  return (
    <ApiController method={"createSurvivor"} onSuccess={((response) => onCreateSurvivor(response))}>
      { ({ makeRequest }) => (
        <form onSubmit={handleSubmit((data) => makeRequest({ name: data.name, gender: data.gender, settlementId }))}>
          <label for="name">Name</label>
          <input name="name" ref={register({ required: true })} />
          
          <label for="male">Male</label>
          <input type="radio" id="male" name="gender" value="1" ref={register({ required: true })}/>
          
          <label for="female">Female</label>
          <input type="radio" id="female" name="gender" value="2" ref={register({ required: true })}/>

          <input type="submit"/>
        </form>
      )}
    </ApiController>
  )
}

export default SurvivorCreateForm;