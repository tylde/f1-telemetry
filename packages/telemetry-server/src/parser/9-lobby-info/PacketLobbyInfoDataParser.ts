import {PacketLobbyInfoData} from '@f1-telemetry/types';

import {LobbyInfoDataParser} from './LobbyInfoDataParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketParser} from '../PacketParser';

export class PacketLobbyInfoDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});

    this.uint8('numPlayers');
    this.array('lobbyPlayers', {length: 22, type: new LobbyInfoDataParser()})
  }

  fromBuffer(buffer: Buffer): PacketLobbyInfoData {
    return super.fromBuffer(buffer);
  }
}
