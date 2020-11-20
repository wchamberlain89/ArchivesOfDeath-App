import { useState, useEffect } from 'react';
import archivesOfDeathService from '../../services/archivesOfDeathService';

export function useAPI(method:string, ...params: any[]) {
  // ---- Hooks
  const [data, setData]           = useState<object[] | []>([]);
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

  return [ data, setData, isLoading, error, request ] as const;
}