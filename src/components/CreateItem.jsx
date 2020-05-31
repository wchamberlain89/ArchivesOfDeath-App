import React from 'react';
import ItemModal from './ItemModal';
import useModal from './hooks/useModal';

const CreateItem  = ({ inventoryId }) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>Add new item</button>
      <ItemModal
        isShowing={isShowing}
        hide={toggle}
        inventoryId={inventoryId}
      />
    </>
  )
}

export default CreateItem;