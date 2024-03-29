import {PacketCarTelemetryData} from '@f1-telemetry/types';

import {CarTelemetryDataParser} from './CarTelemetryDataParser';
import {PacketHeaderParser} from '../header/PacketHeaderParser';
import {PacketParser} from '../PacketParser';

export class PacketCarTelemetryDataParser extends PacketParser {
  constructor() {
    super();
    this.nest('header', {type: new PacketHeaderParser()});
    this.array('carTelemetryData', {length: 22, type: new CarTelemetryDataParser()})
    this.uint32le('buttonStatus');
    this.uint8('mfdPanelIndex');
    this.uint8('mfdPanelIndexSecondaryPlayer');
    this.int8('suggestedGear');
  }


  fromBuffer(buffer: Buffer): PacketCarTelemetryData {
    return super.fromBuffer(buffer);
  }
}
