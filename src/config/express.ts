import * as e from 'express';
import { IEnvironmentConfig } from './config';
import { join } from 'path';

module.exports = (config: IEnvironmentConfig, express: e.Application) => {
  express.use(e.static(join(process.cwd(), 'client')));
  
  express.disable('x-powered-by');
};
