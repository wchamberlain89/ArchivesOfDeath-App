import React from "react";
import { useForm } from "react-hook-form";

const CreateSettlement = ( props ) => {
  const { register, handleSubmit, watch, errors } = useForm();
  
  const createNewSettlement = (data) => {
    console.log(data)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name : data.name })
    };
    fetch('http://localhost:7000/settlements', requestOptions)
    .then(response => response.json())
    .then(response => props.handleAddSettlement(response));
  };

  return (
    <form onSubmit={handleSubmit(createNewSettlement)}>
      <label for="name">Name</label>
      <input name="name" defaultValue="test" ref={register} />
      <input type="submit" />
    </form>
  );
}

export default CreateSettlement;