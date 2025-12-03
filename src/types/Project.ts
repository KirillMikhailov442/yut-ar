import { ResponseBase } from './Response';

export interface IProject {
  id: number;
  title: string;
  description: string;
  preview: string;
  width: number;
  height: number;
}

export type IProjectCreate = Omit<IProject, 'id'>;

export type IProjectUpdate = Omit<IProject, 'id'>;

export type ProjectResponse = ResponseBase<IProject>;

export type ProjectsResponse = ResponseBase<IProject[]>;
