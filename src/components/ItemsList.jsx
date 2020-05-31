import React, {useEffect, useState} from 'react';

const ItemsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/items")
    .then(res => res.json())
    .then( result => {
      console.log(result);
      setItems(result);
    })
    .catch( err => console.error(err));
  }, []);

  return (
    <ul>
      {
        items.map(item => <li key={item.itemId}>{item.name} {item.itemId}</li>)
      }
    </ul>
  )
}
 export default ItemsList;
