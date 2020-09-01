import {PacketParser} from '../PacketParser';

export class MarshalZoneParser extends PacketParser {
  constructor() {
    super();

    this.floatle('zoneStart');
    this.int8('zoneFlag');
  }
}
