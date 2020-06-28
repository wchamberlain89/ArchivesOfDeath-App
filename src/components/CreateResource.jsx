import React from 'react';
import Modal from './Modal';
import useModal from './hooks/useModal';
import { useForm } from 'react-hook-form';
import ResourceSelect from './ResourceSelect';

const CreateResource = ({ settlementId, onCreateResource }) => {
  const { modal, handleModal } = useModal();
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
      onCreateResource(json)
    });
  };

  return (
    <>
      <button onClick={handleModal}>Add new item</button>
      <Modal
        isShowing={modal}
        hide={handleModal}
      >
        <ResourceSelect register={register}/>
        <button onClick={handleSubmit(onSubmit)}>Add Item</button>
      </Modal>
    </>
  )
}

export default CreateResource;