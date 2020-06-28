import React from 'react';
import Modal from './Modal';
import useTestModal from './hooks/useTestModal';
import { useForm } from 'react-hook-form';
import ResourceSelect from './ResourceSelect';

const ResourceCreateController = ({ settlementId, onCreateResource, children }) => {
  const createResource = (resourceId) => {
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
  }
   
  const renderProps = {
    createResource
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default ResourceCreateController;