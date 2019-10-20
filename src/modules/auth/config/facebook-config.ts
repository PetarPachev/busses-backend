import { IFacebookConfig } from '../interfaces/facebook-config.interface';

export const facebookConfig: IFacebookConfig = {
  login_dialog_uri: 'https://www.facebook.com/v2.12/dialog/oauth',
  access_token_uri: 'https://graph.facebook.com/v2.12/oauth/access_token',
  client_id: '206464066672668',
  client_secret: 'c645cd7dcf9653f1cfadeb0619cfcc4f',
  oauth_redirect_uri: 'http://localhost:4200/login',
  state: '{fbstate}'
};
