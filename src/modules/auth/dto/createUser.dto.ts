import { AuthMethod } from '../enums/authMethod.enum';

export class CreateUserDTO {
  method: AuthMethod;
  roles: string[];
  local?: {
    email: string;
    salt: string;
    hashedPassword: string;
  };
  facebook?: {
    id: string;
    email: string;
  };
  google?: {
    id: string;
    email: string;
    displayName: string;
  };
  twitter?: {
    id: string;
    username: string;
    displayName: string;
  };
}
