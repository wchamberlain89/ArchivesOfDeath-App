import baseService from './baseService';

class archivesOfDeathAPI extends baseService {
  [index: string]: Function;

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
  
  createSettlement(body: { name? : string }) {
    return this.POST(`/settlements`, { name: body.name });
  }

  //ResourceRoutes
  getSettlementResources(settlementId: number) {
    return this.GET(`/settlements/${settlementId}/resources`);
  }

  //GearRoutes
  getSettlementGear(settlementId: number) {
    return this.GET(`/settlements/${settlementId}/gear`);
  }

  //SurvivorRoutes
  getSurvivors(settlementId: number) {
    return this.GET(`/survivors?settlementId=${settlementId}`);
  }

  getSurvivor(survivorId: number) {
    console.log("getting survivor")
    return this.GET(`/survivors/${survivorId}`)
  }

  createSurvivor(body: { name: string, gender: string, settlementId : number}) {
    return this.POST(`/survivors`, { name: body.name, gender: body.gender, settlementId: body.settlementId })
  }

  //Survivor Fighting Art Routes
  createSurvivorFightingArt(survivorId: string, body: { fightingArtId: number }) {
    return this.POST(`/survivors/${survivorId}/fightingArts`, { fightingArtId: body.fightingArtId });
  }
}

export default new archivesOfDeathAPI();
