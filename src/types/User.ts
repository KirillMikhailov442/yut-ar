export interface IUser {
  readonly id: number;
  name: string;
  surname: string;
  email: string;
}

export interface IUserCreate extends Omit<IUser, 'id'> {
  passport: string;
}

export type IUserUpdate = Omit<IUser, 'id'>;
