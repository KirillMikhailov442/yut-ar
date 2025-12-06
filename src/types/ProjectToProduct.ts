import { ResponseBase } from './Response';

export interface IProjectToProduct {
  id: number;
  project_id: number;
  product_id: number;
  cart_id: number;
  coordinate_x: number;
  coordinate_y: number;
}

export interface IProjectToProductCreate {
  project_id: number;
  product_id: number;
  coordinate_x: number;
  coordinate_y: number;
}

export type ProjectToProductsResponse = ResponseBase<IProjectToProduct[]>;
