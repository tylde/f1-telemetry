import winston from 'winston';

const colorize = winston.format.colorize();

const logFormat = winston.format.printf((info) => {
  const date = new Date().toISOString();
  return `(${date}) ${info.level}: ${info.message}`;
});

const upperCaseLevel = winston.format(info => ({...info, level: info.level.toUpperCase()}))();

const addTimestamp = winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'});

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        upperCaseLevel,
        colorize,
        logFormat
      ),
      silent: false
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      level: 'info',
      maxsize: 104857600,
      maxFiles: 5,
      format: winston.format.combine(
        addTimestamp,
        winston.format.json()
      )
    }),
    new winston.transports.File({
      filename: 'logs/errors.log',
      level: 'error',
      maxsize: 104857600,
      maxFiles: 5,
      format: winston.format.combine(
        addTimestamp,
        winston.format.json()
      )
    }),
    new winston.transports.File({
      filename: 'logs/debug.log',
      level: 'debug',
      maxsize: 104857600,
      maxFiles: 5,
      format: winston.format.combine(
        addTimestamp,
        winston.format.json()
      )
    })
  ]
});

export default logger;
