import {PacketParser} from '../PacketParser';

export class WeatherForecastSampleParser extends PacketParser {
  constructor() {
    super();

    this.uint8('sessionType');
    this.uint8('timeOffset');
    this.uint8('weather');
    this.int8('trackTemperature');
    this.int8('airTemperature');
  }
}
