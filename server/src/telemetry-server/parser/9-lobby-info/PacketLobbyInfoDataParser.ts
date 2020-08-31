import {Parser} from 'binary-parser';

import {PacketParser} from '../PacketParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketLobbyInfoData} from '../../../interface/packet.interface';
import {LobbyInfoDataParser} from './LobbyInfoDataParser';

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
