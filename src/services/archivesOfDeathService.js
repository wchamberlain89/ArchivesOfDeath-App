import baseService from './baseService';

class archivesOfDeathAPI extends baseService {
  constructor() {
    super('http://localhost:7000');
  }

  getSettlements() {
    return this.GET('/settlements');
  }

  getSettlementResources(settlementId) {
    console.log("attempting to get resources")
    return this.GET(`/settlements/${settlementId}/resources`);
  }

  updateResource(settlementId, resourceId, body) {
    return this.PUT(`/settlements/${settlementId}/resources/${resourceId}`, body)
  }
}

export default new archivesOfDeathAPI();
