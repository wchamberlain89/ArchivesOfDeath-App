import React from 'react';
import Modal from './Modal';
import useModal from './hooks/useModal';
import { useForm } from 'react-hook-form';
import ResourceSelect from './ResourceSelect';

const CreateResource = ({ settlementId, handleCreateResource }) => {
  const { isShowing, toggle } = useModal();
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (formData) => {
    const resourceId = formData.resource;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        qty: 1 
      })
    };
    fetch(`http://localhost:7000/settlements/${settlementId}/resources/${resourceId}}`, requestOptions)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      handleCreateResource(json)
    });
  };

  return (
    <>
      <button onClick={toggle}>Add new item</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      >
        <ResourceSelect register={register}/>
        <button onClick={handleSubmit(onSubmit)}>Add Item</button>
      </Modal>
    </>
  )
}

export default CreateResource;