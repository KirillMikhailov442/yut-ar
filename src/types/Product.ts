export interface IProduct {
  id: number;
  title: string;
  description: string;
  cost: number;
  width: number;
  height: number;
  depth: number;
  photos: string[];
}

export type IProductCreate = Omit<IProduct, 'id'>;

export type IProductUpdate = Omit<IProduct, 'id'>;
