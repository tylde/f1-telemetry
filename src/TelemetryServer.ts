import dgram from 'dgram';
import net from 'net';

import {PacketHeaderParser} from './parser/header/PacketHeaderParser';
import {PacketMotionDataParser} from './parser/0-motion/PacketMotionDataParser';
import {PacketCarTelemetryDataParser} from './parser/6-car-telemetry/PacketCarTelemetryDataParser';
import {PACKET_ID} from './constants/packet';


class TelemetryServer {
  port: number;
  client: dgram.Socket;

  constructor(port: number = 20777) {
    this.port = port;
    this.client = dgram.createSocket('udp4');
  }

  private static parseMessage(message: Buffer) {
    const header = new PacketHeaderParser().fromBuffer(message);
    const {packetId} = header;

    console.log(header);

    switch (packetId) {
      case PACKET_ID.MOTION: {
        const data = new PacketMotionDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.SESSION: {
        break;
      }
      case PACKET_ID.LAP_DATA: {
        break;
      }
      case PACKET_ID.EVENT: {
        break;
      }
      case PACKET_ID.PARTICIPANTS: {
        break;
      }
      case PACKET_ID.CAR_SETUPS: {
        break;
      }
      case PACKET_ID.CAR_TELEMETRY: {
        const data = new PacketCarTelemetryDataParser().fromBuffer(message);
        break;
      }
      case PACKET_ID.CAR_STATUS: {
        break;
      }
      case PACKET_ID.FINAL_CLASSIFICATION: {
        break;
      }
      case PACKET_ID.LOBBY_INFO: {
        break;
      }

    }
  }

  start(): void {
    this.client.on('listening', () => {
      const address = this.client.address() as net.AddressInfo;
      console.log(`UDP Client listening on ${address.address}:${address.port}`);

      this.client.setBroadcast(true);
    });

    this.client.on('message', message => TelemetryServer.parseMessage(message));
    this.client.bind(this.port);
  }

  stop(): void {

  }
}

export default TelemetryServer;
