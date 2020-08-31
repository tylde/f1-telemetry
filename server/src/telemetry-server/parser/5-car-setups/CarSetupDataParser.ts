import {PacketParser} from '../PacketParser';
import {Parser} from 'binary-parser';

export class CarSetupDataParser extends PacketParser {
  constructor()  {
    super();

    this.uint8('frontWing');
    this.uint8('rearWing');
    this.uint8('onThrottle');
    this.uint8('offThrottle');
    this.floatle('frontCamber');
    this.floatle('rearCamber');
    this.floatle('frontToe');
    this.floatle('rearToe');
    this.uint8('frontSuspension');
    this.uint8('rearSuspension');
    this.uint8('frontAntiRollBar');
    this.uint8('rearAntiRollBar');
    this.uint8('frontSuspensionHeight');
    this.uint8('rearSuspensionHeight');
    this.uint8('brakePressure');
    this.uint8('brakeBias');
    this.floatle('rearLeftTyrePressure');
    this.floatle('rearRightTyrePressure');
    this.floatle('frontLeftTyrePressure');
    this.floatle('frontRightTyrePressure');
    this.uint8('ballast');
    this.floatle('fuelLoad');
  }
}
