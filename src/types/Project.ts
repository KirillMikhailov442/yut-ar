export interface IProject {
  id: number;
  title: string;
  description: string;
  preview: string;
}

export type IProjectCreate = Omit<IProject, 'id'>;

export type IProjectUpdate = Omit<IProject, 'id'>;
