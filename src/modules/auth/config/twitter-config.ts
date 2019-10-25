import { ITwitterConfig } from '../interfaces/twitter-config.interface';

export const twitterConfig: ITwitterConfig = {
  consumer_key: 'WRWUPcsAKXSKeX3JlBN6dGk7R',
  consumer_secret: 'SQ8GQOtv6tLNCVFGRPIrCupcM91rPmRBYfmo2h2FLIESwtPIy2',
  request_token_uri: 'https://api.twitter.com/oauth/request_token',
  login_dialog_uri: 'https://api.twitter.com/oauth/authenticate',
  access_token_uri: 'https://api.twitter.com/oauth/access_token',
  oauth_redirect_uri: 'http://localhost:4200/login'
};
