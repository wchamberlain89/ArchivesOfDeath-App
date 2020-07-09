import testApiService from './testApiService';
import { AxiosRequestConfig } from 'axios';
import { Settlement, Resource } from '../types/interfaces';

const ARCHIVES_CONFIG = {
  baseURL: "http://localhost:7000"
}

export class ArchivesOfDeathTestService extends testApiService {
  constructor () {
    super(ARCHIVES_CONFIG);
  }

  getSettlements() {
    console.log("getting settlements")
    return this.get<Settlement[]>('/settlements');
  }

  getResources() {
    return this.get<Resource[]>('/assets/resources');
  }
}

export default new ArchivesOfDeathTestService();