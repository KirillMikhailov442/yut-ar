import { ResponseBase } from './Response';

export interface ICategory {
  id: number;
  name: string;
}

export type ICategoryCreate = Omit<ICategory, 'id'>;

export type ICategoryUpdate = Omit<ICategory, 'id'>;

export type CategoryResponse = ResponseBase<ICategory>;

export type CategoiesResponse = ResponseBase<ICategory[]>;
