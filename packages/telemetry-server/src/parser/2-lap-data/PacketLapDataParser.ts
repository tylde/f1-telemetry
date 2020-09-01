import {PacketLapData} from '@f1-telemetry/types';

import {LapDataParser} from './LapDataParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketParser} from '../PacketParser';

export class PacketLapDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});

    this.uint8('numActiveCars');
    this.array('m_lapData', {length: 22, type: new LapDataParser()})
  }

  fromBuffer(buffer: Buffer): PacketLapData  {
    return super.fromBuffer(buffer);
  }
}
