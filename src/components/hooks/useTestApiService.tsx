import { useState, useEffect } from 'react';
import archivesOfDeathTestService, { ArchivesOfDeathTestService } from '../../services/archivesOfDeathTestService';
import { AxiosResponse } from 'axios';

type methodTypes =
  'getSettlements' |
  'getResources';


export function useAPI<T>(method: methodTypes, ...params: any[]) {
  archivesOfDeathTestService['']
  // ---- Hooks
  const [data, setData]           = useState<methodTypes[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, onError]          = useState<any>(null);

  // ---- API
  const request = async () => {
    try {
      setIsLoading(true);
      const response = await archivesOfDeathTestService[method]();
    } catch (error) {
      onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { request() }, []);

  return [ data, setData, isLoading, error, request ] as const;
}