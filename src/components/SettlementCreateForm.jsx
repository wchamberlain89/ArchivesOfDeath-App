import React from "react";
import { useForm } from "react-hook-form";
import SettlementCreateController from './SettlementCreateController';
import ApiController from './ApiServiceController';
import archivesOfDeathService from '../services/archivesOfDeathService';

const SettlementCreateForm = ({ onCreateSettlement }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <ApiController method={'createSettlement'} onSuccess={ onCreateSettlement }>
      {({ makeRequest, isLoading }) => (
        <>
        <form disabled={isLoading} onSubmit={handleSubmit(( data ) => makeRequest({ name : data.name }))}>
          <label for="name">Name</label>
          <input name="name" defaultValue="test" ref={register} />
          <input type="submit" />
        </form>
        </>
      )}
    </ApiController>
  );
}


export default SettlementCreateForm;