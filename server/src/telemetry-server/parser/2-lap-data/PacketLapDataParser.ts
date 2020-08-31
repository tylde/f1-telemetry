import {PacketParser} from '../PacketParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {LapDataParser} from './LapDataParser';

export class PacketLapDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});

    this.uint8('numActiveCars');
    this.array('m_lapData', {length: 22, type: new LapDataParser()})
  }

  fromBuffer(buffer: Buffer): PacketLapDataParser  {
    return super.fromBuffer(buffer);
  }
}
