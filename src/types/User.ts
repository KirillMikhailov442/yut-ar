import { ResponseBase } from './Response';

export interface IUser {
  readonly id: number;
  name: string;
  surname: string;
  email: string;
}

export interface IUserCreate extends Omit<IUser, 'id' | 'email'> {
  password: string;
  login: string;
}

export interface ILogin {
  login: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  user: Pick<IUser, 'id' | 'name' | 'surname'>;
}

export type IUserUpdate = Omit<IUser, 'id'>;

export type UserResponse = ResponseBase<IUser>;

export type UsersResponse = ResponseBase<IUser[]>;
