import { Document } from 'mongoose';

import { AuthMethod } from '../enums/authMethod.enum';

export interface IUser extends Document {
  id: string;
  method: AuthMethod;
  roles: string[];
  local: {
    email: string;
    salt: string;
    hashedPassword: string;
  };
  google: {
    id: string;
    email: string;
    displayName: string;
  };
  facebook: {
    id: string;
    email: string;
  };
  twitter: {
    id: string;
    username: string;
    displayName: string;
  };
}
