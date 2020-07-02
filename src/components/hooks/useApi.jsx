import { useState, useEffect } from 'react';
import archivesOfDeathService from '../../services/archivesOfDeathService';

export function useAPI(method, ...params) {
  // ---- Hooks
  const [data, setData]           = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, onError]          = useState(null);

  // ---- API
  const request = async () => {
    try {
      setIsLoading(true);
      setData(await archivesOfDeathService[method](...params));
    } catch (error) {
      onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { request() }, []);

  return [ data, setData, isLoading, error, request ];
}