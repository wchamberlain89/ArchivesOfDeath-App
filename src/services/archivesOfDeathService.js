import baseService from './baseService';

class archivesOfDeathAPI extends baseService {
  constructor() {
    super('http://localhost:7000');
  }

  getSettlements() {
    return this.GET('/settlements');
  }

  getSettlementResources(settlementId) {
    return this.GET(`/settlements/${settlementId}/resources`);
  }

  getSettlementGear(settlementId) {
    return this.GET(`/settlements/${settlementId}/gear`);
  }

  getGearAssets() {
    return this.GET(`/assets/gear`);
  }

  getSurvivors() {
    return this.GET(`/settlements/${settlementId}/survivors`);
  }

  updateResource(settlementId, resourceId, body) {
    return this.PUT(`/settlements/${settlementId}/resources/${resourceId}`, body)
  }
}

export default new archivesOfDeathAPI();
