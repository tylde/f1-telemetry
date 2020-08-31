import {Parser} from 'binary-parser';

import {PacketParser} from '../PacketParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketFinalClassificationData} from '../../../interface/packet.interface';
import {FinalClassificationDataParser} from './FinalClassificationDataParser';

export class PacketFinalClassificationDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});

    this.uint8('numCars');
    this.array('classificationData', {length: 22, type: new FinalClassificationDataParser()})
  }

  fromBuffer(buffer: Buffer): PacketFinalClassificationData {
    return super.fromBuffer(buffer);
  }
}
