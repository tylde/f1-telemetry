import {Parser} from 'binary-parser';

import {PacketParser} from '../PacketParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {CarMotionPacketParser} from './CarMotionPacketParser';

export class PacketMotionDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});

    this.array('carMotionData', {length: 22, type: new CarMotionPacketParser()});

    this.array('suspensionPosition', {length: 4, type: new Parser().floatle('')});
    this.array('suspensionVelocity', {length: 4, type: new Parser().floatle('')});
    this.array('suspensionAcceleration', {length: 4, type: new Parser().floatle('')});
    this.array('wheelSpeed', {length: 4, type: new Parser().floatle('')});
    this.array('wheelSlip', {length: 4, type: new Parser().floatle('')});
    this.floatle('localVelocityX');
    this.floatle('localVelocityY');
    this.floatle('localVelocityZ');
    this.floatle('angularVelocityX');
    this.floatle('angularVelocityY');
    this.floatle('angularVelocityZ');
    this.floatle('angularAccelerationX');
    this.floatle('angularAccelerationY');
    this.floatle('angularAccelerationZ');
    this.floatle('frontWheelsAngle');
  }

  fromBuffer(buffer: Buffer): PacketMotionDataParser {
    return super.fromBuffer(buffer);
  }
}
