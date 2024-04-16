import winston, { transports, format } from 'winston';
const { combine, colorize, timestamp, align, printf } = format;

export const logger = winston.createLogger({
    level: 'debug',
    format: combine(
        colorize({ all: true }),
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss A',
        }),
        align(),
        printf(({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`)
    ),
    transports: [new transports.Console({})],
});
