import {PacketParser} from '../PacketParser';

export class LobbyInfoDataParser extends PacketParser {
  constructor() {
    super();

    this.uint8('aiControlled');
    this.uint8('teamId');
    this.uint8('nationality');
    this.string('name', {length: 48, stripNull: true})
    this.uint8('readyStatus');
  }
}
