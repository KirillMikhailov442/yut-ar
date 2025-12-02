export interface ICart {
  id: number;
  cost: number;
}

export type ICartCreate = Omit<ICart, 'cost'>;

export type ICartUpdate = Omit<ICart, 'cost'>;
