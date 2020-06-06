import React, { useState, useEffect } from 'react';
import CreateItem from './CreateItem';

const SettlementInventory = ({ settlementId }) => {
  const [inventory, setInventory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:7000/inventories/${settlementId}`)
    .then(result => result.json())
    .then( async (result) => {
      console.log(result)
      await setInventory(result[0]);
      setIsLoading(false);
      console.log("Invenotry in SettlementInventory is ", inventory)
    })
    .catch( err => console.error(err));
  }, []);

  return (
    <>
      {isLoading ? <div>Loading</div>
      : (
        <>
        <ul>
          {
            inventory && inventory.items.map(item => <li key={item.itemId}>{item.name} {item.InventoryItem.qty}</li>)
          }
        </ul>
        <CreateItem inventoryId={inventory.invId}/>
        </>
      )}
    </>
  )
}

export default SettlementInventory;