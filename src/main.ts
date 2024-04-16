import { web } from './app/web';
import { logger } from './app/logging';
import { env } from './config/env';

const port = env.APP_PORT;

web.listen(port, () => {
    logger.info(`${env.APP_NAME} Listening on port ${port}`);
});
