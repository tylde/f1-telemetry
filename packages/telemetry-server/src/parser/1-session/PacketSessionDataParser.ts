import {PacketSessionData} from '@f1-telemetry/types';

import {MarshalZoneParser} from './MarshalZoneParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketParser} from '../PacketParser';
import {WeatherForecastSampleParser} from './WeatherForecastSampleParser';

export class PacketSessionDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});

    this.uint8('weather');
    this.int8('trackTemperature');
    this.int8('airTemperature');
    this.uint8('totalLaps');
    this.uint16le('trackLength');
    this.uint8('sessionTypeP');
    this.int8('trackId');
    this.uint8('formula');
    this.uint16le('sessionTimeLeft');
    this.uint16le('sessionDuration');
    this.uint8('pitSpeedLimit');
    this.uint8('gamePaused');
    this.uint8('isSpectating');
    this.uint8('spectatorCarIndex');
    this.uint8('sliProNativeSupport');
    this.uint8('numMarshalZones');
    this.array('marshalZones', {length: 21, type: new MarshalZoneParser()});
    this.uint8('safetyCarStatus');
    this.uint8('networkGame');
    this.uint8('numWeatherForecastSamples');
    this.array('weatherForecastSamples', {length: 20, type: new WeatherForecastSampleParser()});
  }

  fromBuffer(buffer: Buffer): PacketSessionData {
    return super.fromBuffer(buffer);
  }
}
