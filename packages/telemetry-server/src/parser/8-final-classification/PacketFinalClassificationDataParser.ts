import {PacketFinalClassificationData} from '@f1-telemetry/types';

import {FinalClassificationDataParser} from './FinalClassificationDataParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketParser} from '../PacketParser';

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
