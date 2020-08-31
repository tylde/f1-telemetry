import {PacketParser} from '../PacketParser';

export class LapDataParser extends PacketParser {
  constructor() {
    super();

    this.floatle('m_lastLapTime');
    this.floatle('m_currentLapTime');

    this.uint16le('m_sector2TimeInMS');
    this.floatle('m_bestLapTime');
    this.uint8('m_bestLapNum');
    this.uint16le('m_bestLapSector1TimeInMS');
    this.uint16le('m_bestLapSector2TimeInMS');
    this.uint16le('m_bestLapSector3TimeInMS');
    this.uint16le('m_bestOverallSector1TimeInMS');
    this.uint8('m_bestOverallSector1LapNum');
    this.uint16le('m_bestOverallSector2TimeInMS');
    this.uint8('m_bestOverallSector2LapNum');
    this.uint16le('m_bestOverallSector3TimeInMS');
    this.uint8('m_bestOverallSector3LapNum');


    this.floatle('m_lapDistance');
    this.floatle('m_totalDistance');
    this.floatle('m_safetyCarDelta');
    this.uint8('m_carPosition');
    this.uint8('m_currentLapNum');
    this.uint8('m_pitStatus');
    this.uint8('m_sector');
    this.uint8('m_currentLapInvalid');
    this.uint8('m_penalties');
    this.uint8('m_gridPosition');
    this.uint8('m_driverStatus');
    this.uint8('m_resultStatus');

  }
}
