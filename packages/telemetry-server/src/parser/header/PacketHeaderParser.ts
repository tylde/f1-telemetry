import {Parser} from 'binary-parser';

import {PacketHeader} from '@f1-telemetry/types';

import {PacketParser} from '../PacketParser';

export class PacketHeaderParser extends PacketParser {
  constructor() {
    super();
    this.endianess('little');

    this.uint16('packetFormat');
    this.uint8('gameMajorVersion');
    this.uint8('gameMinorVersion');
    this.uint8('packetVersion');
    this.uint8('packetId');
    this.uint64('sessionUID', {formatter: this.formatBigInt});
    this.floatle('sessionTime');
    this.uint32('frameIdentifier');
    this.uint8('playerCarIndex');
    this.uint8('secondaryPlayerCarIndex');
  }

  private formatBigInt(value: Parser.Data): string {
    return value.toString();
  }

  fromBuffer(buffer: Buffer): PacketHeader {
    return super.fromBuffer(buffer);
  }
}
