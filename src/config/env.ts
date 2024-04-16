import 'dotenv/config';

type envType = string | undefined;

export const env: { APP_NAME: envType; APP_PORT: envType } = {
    APP_NAME: process.env.APP_NAME,
    APP_PORT: process.env.APP_PORT,
};
