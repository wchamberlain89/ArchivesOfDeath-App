import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemOption from './ItemOption';

const ItemsSelectList = ({ register }) => {
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
    <select name="item" id="item" ref={register}>
      {items.map((item) => {
        return (
          <ItemOption name={item.name} itemId={item.itemId} key={item.itemId}/>
        )
      })}
    </select>
  );
};

ItemsSelectList.propTypes = {};

export default ItemsSelectList;