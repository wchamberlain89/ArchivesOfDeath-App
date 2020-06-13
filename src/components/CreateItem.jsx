import React from 'react';
import ItemModal from './ItemModal';
import useModal from './hooks/useModal';

const CreateItem = ({ inventoryId, addItem }) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>Add new item</button>
      <ItemModal
        isShowing={isShowing}
        hide={toggle}
        inventoryId={inventoryId}
        addItem={addItem}
      />
    </>
  )
}

export default CreateItem;