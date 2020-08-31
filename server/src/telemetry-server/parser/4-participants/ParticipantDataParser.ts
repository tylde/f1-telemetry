import {PacketParser} from '../PacketParser';

export class ParticipantDataParser extends PacketParser {
  constructor() {
    super();

    this.uint8('aiControlled');
    this.uint8('driverId');
    this.uint8('teamId');
    this.uint8('raceNumber');
    this.uint8('nationality');
    this.string('name', {length: 48})
    this.uint8('yourTelemetry');
  }
}
