import {PacketCarStatusData} from '@f1-telemetry/types';

import {CarStatusDataParser} from './CarStatusDataParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketParser} from '../PacketParser';

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
