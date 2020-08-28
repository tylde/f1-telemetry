import {PacketParser} from './PacketParser';
import {PacketHeader} from '../interface/packet.interface';

export class PacketHeaderParser extends PacketParser {
  constructor() {
    super();
    this.endianess('little');
    this.uint16('m_packetFormat');
    this.uint8('m_gameMajorVersion');
    this.uint8('m_gameMinorVersion');
    this.uint8('m_packetVersion');
    this.uint8('m_packetId');
    this.uint64('m_sessionUID');
    this.floatle('m_sessionTime');
    this.uint32('m_frameIdentifier');
    this.uint8('m_playerCarIndex');
  }

  fromBuffer(buffer: Buffer): PacketHeader {
    return super.fromBuffer(buffer);
  }
}
