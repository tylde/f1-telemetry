import {PacketParser} from '../PacketParser';

export class LapDataParser extends PacketParser {
  constructor() {
    super();

    this.floatle('lastLapTime');
    this.floatle('currentLapTime');

    this.uint16le('sector2TimeInMS');
    this.floatle('bestLapTime');
    this.uint8('bestLapNum');
    this.uint16le('bestLapSector1TimeInMS');
    this.uint16le('bestLapSector2TimeInMS');
    this.uint16le('bestLapSector3TimeInMS');
    this.uint16le('bestOverallSector1TimeInMS');
    this.uint8('bestOverallSector1LapNum');
    this.uint16le('bestOverallSector2TimeInMS');
    this.uint8('bestOverallSector2LapNum');
    this.uint16le('bestOverallSector3TimeInMS');
    this.uint8('bestOverallSector3LapNum');


    this.floatle('lapDistance');
    this.floatle('totalDistance');
    this.floatle('safetyCarDelta');
    this.uint8('carPosition');
    this.uint8('currentLapNum');
    this.uint8('pitStatus');
    this.uint8('sector');
    this.uint8('currentLapInvalid');
    this.uint8('penalties');
    this.uint8('gridPosition');
    this.uint8('driverStatus');
    this.uint8('resultStatus');

  }
}
