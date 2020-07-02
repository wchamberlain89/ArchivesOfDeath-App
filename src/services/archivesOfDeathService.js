import baseService from './baseService';

class archivesOfDeathAPI extends baseService {
  constructor() {
    super('http://localhost:7000');
  }

  //Asset Routes
  getGearAssets() {
    return this.GET(`/assets/gear`);
  }

  getFightingArts() {
    return this.GET(`/assets/fightingArts`);
  }

  //Settlement Routes
  getSettlements() {
    return this.GET('/settlements');
  }
  
  createSettlement(body) {
    return this.POST(`/settlements`, { name: body.name });
  }

  //ResourceRoutes
  getSettlementResources(settlementId) {
    return this.GET(`/settlements/${settlementId}/resources`);
  }

  //GearRoutes
  getSettlementGear(settlementId) {
    return this.GET(`/settlements/${settlementId}/gear`);
  }

  //SurvivorRoutes
  getSurvivors(settlementId) {
    return this.GET(`/survivors?settlementId=${settlementId}`);
  }

  getSurvivor(survivorId) {
    console.log("getting survivor")
    return this.GET(`/survivors/${survivorId}`)
  }

  createSurvivor(body) {
    return this.POST(`/survivors`, { name: body.name, gender: body.gender, settlementId: body.settlementId })
  }

  //Survivor Fighting Art Routes
  createSurvivorFightingArt(settlementId, survivorId, body) {
    console.log(body) 
    return this.POST(`/settlements/${settlementId}/survivors/${survivorId}/fightingArts`, { fightingArtId: body.fightingArtId });
  }
}

export default new archivesOfDeathAPI();
