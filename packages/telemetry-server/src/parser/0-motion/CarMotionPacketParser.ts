import {PacketParser} from '../PacketParser';

export class CarMotionPacketParser extends PacketParser {
  constructor() {
    super();
    this.floatle('worldPositionX');
    this.floatle('worldPositionY');
    this.floatle('worldPositionZ');
    this.floatle('worldVelocityX');
    this.floatle('worldVelocityY');
    this.floatle('worldVelocityZ');
    this.int16('worldForwardDirX');
    this.int16('worldForwardDirY');
    this.int16('worldForwardDirZ');
    this.int16('worldRightDirX');
    this.int16('worldRightDirY');
    this.int16('worldRightDirZ');
    this.floatle('gForceLateral');
    this.floatle('gForceLongitudinal');
    this.floatle('gForceVertical');
    this.floatle('yaw');
    this.floatle('pitch');
    this.floatle('roll');
  }
}
