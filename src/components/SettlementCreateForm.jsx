import React from "react";
import { useForm } from "react-hook-form";
import SettlementCreateController from './SettlementCreateController';

const SettlementCreateForm = ({ onCreateSettlement }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <SettlementCreateController onCreateSettlement={onCreateSettlement}>
      { ({ createSettlement }) => (
        <form onSubmit={handleSubmit(( data ) => createSettlement({ name: data.name }))}>
          <label for="name">Name</label>
          <input name="name" defaultValue="test" ref={register} />
          <input type="submit" />
        </form>
      )}
    </SettlementCreateController>
  );
}


export default SettlementCreateForm;