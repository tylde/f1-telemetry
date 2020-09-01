import bodyParser from 'body-parser';
import expressWinston from 'express-winston';
import winston from 'winston';
import express from 'express';

import TelemetryServer from '@f1-telemetry/telemetry-server';
import {PACKET_KEYS} from '@f1-telemetry/constants';

import HttpException from '../exceptions/HttpException';
import AppRouting from './AppRouting';

import {
  IStore,
  PacketCarSetupData,
  PacketCarStatusData,
  PacketCarTelemetryData,
  PacketEventData,
  PacketFinalClassificationData,
  PacketLapData,
  PacketLobbyInfoData,
  PacketMotionData,
  PacketParticipantsData,
  PacketSessionData
} from '@f1-telemetry/types';

class App {
  public app: express.Application;
  public port: number;
  public logger: winston.Logger;
  public routing: AppRouting;

  private telemetryServer: TelemetryServer;
  private store: IStore;

  constructor(port: number, logger: winston.Logger) {
    this.app = express();
    this.port = port;
    this.logger = logger;
    this.routing = new AppRouting();

    this.telemetryServer = new TelemetryServer();
    this.store = {
      motionPacket: null,
      sessionPacket: null,
      lapDataPacket: null,
      eventPacket: null,
      participantsPacket: null,
      carSetupsPacket: null,
      carTelemetryPacket: null,
      carStatusPacket: null,
      finalClassificationPacket: null,
      lobbyInfoPacket: null
    };

    this.extendRequest();
    this.initializeLogger();
    this.initializeMiddlewares();
    this.initializeRouting();
    this.initializeErrorHandling();

    this.initializeTelemetryServer();
  }

  private extendRequest(): void {
    this.app.use(
      (request, _response, next) => {
        request.store = this.store;
        return next();
      }
    )
  }

  private initializeTelemetryServer(): void {
    this.telemetryServer.on(PACKET_KEYS.MOTION, (data: PacketMotionData) => {
      this.store.motionPacket = data;
    });

    this.telemetryServer.on(PACKET_KEYS.SESSION, (data: PacketSessionData) => {
      this.store.sessionPacket = data;
    });

    this.telemetryServer.on(PACKET_KEYS.LAP_DATA, (data: PacketLapData) => {
      this.store.lapDataPacket = data;
    });

    this.telemetryServer.on(PACKET_KEYS.EVENT, (data: PacketEventData) => {
      this.store.eventPacket = data;
    });

    this.telemetryServer.on(PACKET_KEYS.PARTICIPANTS, (data: PacketParticipantsData) => {
      this.store.participantsPacket = data;
    });

    this.telemetryServer.on(PACKET_KEYS.CAR_SETUPS, (data: PacketCarSetupData) => {
      this.store.carSetupsPacket = data;
    });

    this.telemetryServer.on(PACKET_KEYS.CAR_TELEMETRY, (data: PacketCarTelemetryData) => {
      this.store.carTelemetryPacket = data;
    });

    this.telemetryServer.on(PACKET_KEYS.CAR_STATUS, (data: PacketCarStatusData) => {
      this.store.carStatusPacket = data;
    });

    this.telemetryServer.on(PACKET_KEYS.FINAL_CLASSIFICATION, (data: PacketFinalClassificationData) => {
      this.store.finalClassificationPacket = data;
    });

    this.telemetryServer.on(PACKET_KEYS.LOBBY_INFO, (data: PacketLobbyInfoData) => {
      this.store.lobbyInfoPacket = data;
    });

    this.telemetryServer.start();
  }

  private initializeLogger(): void {
    this.app.use(
      expressWinston.logger({
        winstonInstance: this.logger,
        msg: '{{req.connection.remoteAddress}} {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
        meta: false
      })
    );
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
  }

  private initializeRouting(): void {
    this.app.use('/', this.routing.router);
  }

  private static handleException(
    error: HttpException, _request: express.Request, response: express.Response, next: express.NextFunction
  ): void {
    const {message = 'Internal Server Error', status = 500, stack, name} = error;
    response.status(status).send({
      message,
      status,
      stack: !stack || Array.isArray(stack) ? stack : stack.split('\n'),
      name
    });
    next();
  }

  private initializeErrorHandling(): void {
    this.app.use(App.handleException);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.info(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
