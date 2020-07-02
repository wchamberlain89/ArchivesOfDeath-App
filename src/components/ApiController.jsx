import React from 'react';
import archivesOfDeathService from '../services/archivesOfDeathService';
import { useState } from 'react';

const ApiController = ({ method, children, onSuccess, onError }) => {
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = (...params) => {
    setIsLoading(true);
    archivesOfDeathService[method](...params)
    .then(res => {
      if(onSuccess) {
        onSuccess(res)
      }
    })
    .catch(err => {
      if(onError) {
        onError(err)
      }
    })
    .finally(() => {
      setIsLoading(false);
    })
  };

  const renderProps = {
    makeRequest,
    isLoading
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default ApiController;