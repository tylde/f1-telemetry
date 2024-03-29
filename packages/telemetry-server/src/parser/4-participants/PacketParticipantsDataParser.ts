import {PacketParticipantsData} from '@f1-telemetry/types';

import {PacketParser} from '../PacketParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {ParticipantDataParser} from './ParticipantDataParser';

export class PacketParticipantsDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});

    this.uint8('numActiveCars');
    this.array('participants', {length: 22, type: new ParticipantDataParser()})
  }

  fromBuffer(buffer: Buffer): PacketParticipantsData {
    return super.fromBuffer(buffer);
  }
}
