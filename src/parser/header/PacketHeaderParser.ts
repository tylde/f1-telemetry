import {PacketParser} from '../PacketParser';
import {PacketHeader} from '../../interface/packet.interface';

export class PacketHeaderParser extends PacketParser {
  constructor() {
    super();
    this.endianess('little');

    this.uint16('packetFormat');
    this.uint8('gameMajorVersion');
    this.uint8('gameMinorVersion');
    this.uint8('packetVersion');
    this.uint8('packetId');
    this.uint64('sessionUID');
    this.floatle('sessionTime');
    this.uint32('frameIdentifier');
    this.uint8('playerCarIndex');
    this.uint8('secondaryPlayerCarIndex');
  }

  fromBuffer(buffer: Buffer): PacketHeader {
    return super.fromBuffer(buffer);
  }
}
