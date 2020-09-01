import {Parser} from 'binary-parser';

export class PacketParser extends Parser {
  constructor() {
    super();
  }

  fromBuffer(buffer: Buffer): Parser.Parsed<any> {
    return this.parse(buffer);
  }
}
