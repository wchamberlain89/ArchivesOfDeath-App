import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from './hooks/useModalContext';
import { 
  Counter, 
  ResourceListItem, 
} from './index';

const ResourceDetailModal = (props) => {
  const { name, description, resourceId, settlementId, dispatch } = props;
  const [ qty, setQty ] = useState(props.qty);
  
  const handleIncrement = () => {
    setQty(qty + 1);
  }

  const handleDecrement = () => {
    if(qty > 0) {
      setQty(qty - 1);
    }
  }

  const handleUpdateResource = () => {
    dispatch({ type: 'UPDATE_INIT' })
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        qty: qty
      })
    }
    fetch(`http://localhost:7000/settlements/${settlementId}/resources/${resourceId}}`, requestOptions)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: 'UPDATE_FINISHED', payload : json })
    });
  };
  
  return <div>
    <p>{name}</p>
    <p>Description is : {description}</p>
    <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={qty}/>
    <p>resource ID is : {resourceId}</p>
    <button onClick={handleUpdateResource}>Update Quantity</button>
    <button onClick={() => props.handleModal()}>close</button>
  </div>
}

const ResourceList = (props) => {
  const { settlementId, resources, dispatch } = props;
  console.log("settlementId in resourcelist is", settlementId);
  const [ selectedResource, setSelectedResource ] = useState(null);
  const { handleModal } = useContext(ModalContext);
  
  const openResourceDetailModal = ({ qty, resourceId, resourceInfo : { description, name } }) => {
    handleModal(<ResourceDetailModal 
                  resourceId={resourceId}
                  settlementId={settlementId} 
                  description={description}
                  name={name}
                  qty={qty}                  
                  dispatch={dispatch}
                  handleModal={handleModal.call(this)}
                  />);
  }
  
  return (
    <>
      <ul>
        {resources.map( ( resource ) => {
          return <ResourceListItem 
            key={resource.resourceId} 
            name={resource.resourceInfo.name}
            qty={resource.qty} 
            resourceId={resource.resourceId}
            settlementId={settlementId}
            onClick={ () => openResourceDetailModal( resource ) }
          />
        })}
      </ul>
    </>
  )
}

ResourceList.propTypes = {
  resources : PropTypes.arrayOf(PropTypes.exact({
    qty : PropTypes.number,
    resourceId : PropTypes.number,
    resourceInfo : PropTypes.shape({
      name : PropTypes.string,
      description : PropTypes.string
    })
  }))
}

export default ResourceList;