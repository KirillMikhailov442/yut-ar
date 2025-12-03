import { ResponseBase } from './Response';

export interface ICart {
  id: number;
  cost: number;
}

export type ICartCreate = Omit<ICart, 'cost'>;

export type ICartUpdate = Omit<ICart, 'cost'>;

export type CartResponse = ResponseBase<ICart>;

export type CartsResponse = ResponseBase<ICart[]>;
