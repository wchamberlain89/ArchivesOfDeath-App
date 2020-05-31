import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  
  const onSubmit = ({ name }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name : name })
    };
    fetch('http://localhost:7000/settlements', requestOptions)
    .then(response => response.json())
    .then(response => console.log(response));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="name">Name</label>
      <input name="name" defaultValue="test" ref={register} />
      <input type="submit" />
    </form>
  );
}