import baseService from './baseService';

class archivesOfDeathAPI extends baseService {
  constructor() {
    super('http://localhost:7000');
  }

  getSettlements() {
    return this.GET('/settlements');
  }
}

export default new archivesOfDeathAPI();
