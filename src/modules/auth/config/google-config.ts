import { IGoogleConfig } from '../interfaces/google-config.interface';

export const googleConfig: IGoogleConfig = {
  login_dialog_uri: 'https://accounts.google.com/o/oauth2/auth',
  client_id: '213116699084-kp6g9b57vglkeisr2773h9udgi9ip1tl.apps.googleusercontent.com',
  client_secret: 's_ngMkIe-oXQP33ROnx0ZT_k',
  oauth_redirect_uri: 'http://localhost:4200/login',
  access_token_uri: 'https://accounts.google.com/o/oauth2/token',
  response_type: 'code',
  scopes: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
  ],
  grant_type: 'authorization_code'
};
