import React from 'react';
import ReactDOM from 'react-dom';
import ItemsSelectList from './ItemsSelectList';
import { useForm } from 'react-hook-form';

const ItemModal = ({ isShowing, hide, inventoryId, addItem }) => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = ({ item }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        itemId : item,
        qty: 1 
      })
    };
    fetch(`http://localhost:7000/settlements/inventory/${inventoryId}`, requestOptions)
    .then(response => response.json())
    .then(json => addItem(json));
  };

  return (
    isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>
            Hello, I'm a modal.
          </p>
          <ItemsSelectList register={register}/>
          <button onClick={handleSubmit(onSubmit)}>Add Item</button>
        </div>
      </div>
    </React.Fragment>, document.body
    ) : null
  ) 
}

export default ItemModal;