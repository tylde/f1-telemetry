import {Parser} from 'binary-parser';

import {PacketParser} from '../PacketParser';

export class CarStatusDataParser extends PacketParser {
  constructor() {
    super();

    this.uint8('tractionControl');
    this.uint8('antiLockBrakes');
    this.uint8('fuelMix');
    this.uint8('frontBrakeBias');
    this.uint8('pitLimiterStatus');
    this.floatle('fuelInTank');
    this.floatle('fuelCapacity');
    this.floatle('fuelRemainingLaps');
    this.uint16le('maxRPM');
    this.uint16le('idleRPM');
    this.uint8('maxGears');
    this.uint8('drsAllowed');
    this.uint16le('drsActivationDistance');
    this.array('tyresWear', {length: 4, type: new Parser().uint8('')});
    this.uint8('actualTyreCompound');
    this.uint8('visualTyreCompound');
    this.uint8('tyresAgeLaps');
    this.array('tyresDamage', {length: 4, type: new Parser().uint8('')});
    this.uint8('frontLeftWingDamage');
    this.uint8('frontRightWingDamage');
    this.uint8('rearWingDamage');
    this.uint8('drsFault');
    this.uint8('engineDamage');
    this.uint8('gearBoxDamage');
    this.int8('vehicleFiaFlags');
    this.floatle('ersStoreEnergy');
    this.uint8('ersDeployMode');
    this.floatle('ersHarvestedThisLapMGUK');
    this.floatle('ersHarvestedThisLapMGUH');
    this.floatle('ersDeployedThisLap');
  }
}
