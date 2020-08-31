import {Parser} from 'binary-parser';

import {PacketParser} from '../PacketParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketCarStatusData} from '../../../interface/packet.interface';
import {CarStatusDataParser} from './CarStatusDataParser';

export class PacketCarStatusDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});

    this.array('carStatusData', {length: 22, type: new CarStatusDataParser()})
  }

  fromBuffer(buffer: Buffer): PacketCarStatusData {
    return super.fromBuffer(buffer);
  }
}
