import {PacketCarSetupData} from '@f1-telemetry/types';

import {CarSetupDataParser} from './CarSetupDataParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketParser} from '../PacketParser';

export class PacketCarSetupDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});

    this.array('carSetups', {length: 22, type: new CarSetupDataParser()})
  }

  fromBuffer(buffer: Buffer): PacketCarSetupData {
    return super.fromBuffer(buffer);
  }
}
