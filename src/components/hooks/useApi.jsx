import { useState, useEffect } from 'react';
import API from '../../services/archivesOfDeathService';

export function useAPI(method, ...params) {
  // ---- Hooks
  const [data, setData]           = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, onError]          = useState(null);

  // ---- API
  const fetchData = async () => {
    try {
      setIsLoading(true);
      console.log("attempting to fetch Data")
      setData(await API[method](...params));
    } catch (error) {
      onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData() }, []);

  return [ data, isLoading, error, fetchData ];
}