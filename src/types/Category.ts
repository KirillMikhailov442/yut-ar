export interface ICategory {
  id: number;
  name: string;
}

export type ICategoryCreate = Omit<ICategory, 'id'>;

export type ICategoryUpdate = Omit<ICategory, 'id'>;
