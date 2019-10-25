import { Config, IEnvironmentConfig } from './config/config';

const env = process.env.NODE_ENV || 'development';

export const SERVER_CONFIG: IEnvironmentConfig = Config[env];

export const DB_CONNECTION_TOKEN: string = 'DbConnectionToken';
export const SERVER_CONFIG_TOKEN: string = 'ServerConfigToken';
export const FACEBOOK_CONFIG_TOKEN: string = 'FacebookConfigToken';
export const TWITTER_CONFIG_TOKEN: string = 'TwitterConfigToken';
export const GOOGLE_CONFIG_TOKEN: string = 'GoogleConfigToken';
export const S3_CONFIG_TOKEN: string = 'S3ConfigToken';

export const USER_MODEL_TOKEN: string = 'User';
export const USERS_BUSSES_MODEL_TOKEN: string = 'UsersBusses';
export const LINE_MODEL_TOKEN: string = 'Line';
export const BUS_MODEL_TOKEN: string = 'Bus';
export const BUS_STOP_MODEL_TOKEN: string = 'BusStop';
export const BUSSES_BUS_STOPS_MODEL_TOKEN: string = 'BussesBusStops';

export const MESSAGES = {
  UNAUTHORIZED_EMAIL_IN_USE: 'The email already exists',
  UNAUTHORIZED_INVALID_PASSWORD: 'Invalid password',
  UNAUTHORIZED_INVALID_EMAIL: 'The email does not exist',
  UNAUTHORIZED_UNRECOGNIZED_BEARER: 'Unrecognized bearer'
};
