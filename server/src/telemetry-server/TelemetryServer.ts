import dgram from 'dgram';
import net from 'net';
import {EventEmitter} from 'events';

import {PacketHeaderParser} from './parser/header/PacketHeaderParser';
import {PacketMotionDataParser} from './parser/0-motion/PacketMotionDataParser';
import {PacketSessionDataParser} from './parser/1-session/PacketSessionDataParser';
import {PacketParticipantsDataParser} from './parser/4-participants/PacketParticipantsDataParser';
import {PacketCarTelemetryDataParser} from './parser/6-car-telemetry/PacketCarTelemetryDataParser';
import {PacketCarStatusDataParser} from './parser/7-car-status/PacketCarStatusDataParser';

import {PACKET_ID, PACKET_TYPES} from '../constants/packet';
import {PacketData} from '../interface/packet.interface';
import {PacketLobbyInfoDataParser} from './parser/9-lobby-info/PacketLobbyInfoDataParser';
import {PacketLapDataParser} from './parser/2-lap-data/PacketLapDataParser';
import {PacketCarSetupDataParser} from './parser/5-car-setups/PacketCarSetupDataParser';
import {PacketFinalClassificationDataParser} from './parser/8-final-classification/PacketFinalClassificationDataParser';


class TelemetryServer extends EventEmitter {
  port: number;
  client: dgram.Socket;

  constructor(port: number = 20777) {
    super();

    this.port = port;
    this.client = dgram.createSocket('udp4');
  }

  private onMessage(message: Buffer) {
    const header = new PacketHeaderParser().fromBuffer(message);
    const {packetId} = header;
    // @ts-ignore
    console.log(`${Date.now()}: Message ${packetId} received.`)

    let data: PacketData | null = {};

    switch (packetId) {
      case PACKET_ID.MOTION: {
        data = new PacketMotionDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.SESSION: {
        data = new PacketSessionDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.LAP_DATA: {
        data = new PacketLapDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.EVENT: {
        data = null; // TODO
        break;
      }
      case PACKET_ID.PARTICIPANTS: {
        data = new PacketParticipantsDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.CAR_SETUPS: {
        data = new PacketCarSetupDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.CAR_TELEMETRY: {
        data = new PacketCarTelemetryDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.CAR_STATUS: {
        data = new PacketCarStatusDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.FINAL_CLASSIFICATION: {
        data = new PacketFinalClassificationDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.LOBBY_INFO: {
        data = new PacketLobbyInfoDataParser().fromBuffer(message);
        break;
      }
    }
    this.emit(PACKET_TYPES[packetId], data);
  }

  start(): void {
    this.client.on('listening', () => {
      const address = this.client.address() as net.AddressInfo;
      console.log(`UDP Client listening on ${address.address}:${address.port}`);

      this.client.setBroadcast(true);
    });

    this.client.on('message', message => this.onMessage(message));
    this.client.bind(this.port);
  }

  stop(): void {

  }
}

export default TelemetryServer;
