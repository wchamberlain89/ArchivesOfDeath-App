import React from "react";
import { useForm } from "react-hook-form";
import SettlementCreateController from './SettlementCreateController';

const SettlementCreateForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <SettlementCreateController>
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