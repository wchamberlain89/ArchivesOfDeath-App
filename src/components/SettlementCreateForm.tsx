import React from "react";
import { useForm } from "react-hook-form";

type propTypes = {
  onCreateSettlement: (data: ISettlementFormData) => void
}

export interface ISettlementFormData {
  name: string
}

export const SettlementCreateForm = ({ onCreateSettlement }: propTypes) => {
  const { register, handleSubmit, watch, errors } = useForm<ISettlementFormData>();
  
  const createSettlement = (data: ISettlementFormData) => {
    onCreateSettlement(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(createSettlement)}>
        <label htmlFor="name">Name</label>
        <input name="name" defaultValue="test" ref={register} />
        <input type="submit" />
      </form>
    </>
  );
}


export default SettlementCreateForm;