import {PacketParser} from '../PacketParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketCarSetupData} from '../../../interface/packet.interface';
import {CarSetupDataParser} from './CarSetupDataParser';

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
