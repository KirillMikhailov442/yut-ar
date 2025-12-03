import { ResponseBase } from './Response';

export interface IFile {
  id: number;
  original_name: string;
  mine_type: string;
  size: number;
  checksum: string;
  description: string;
  owner_id: number;
  is_public: 1 | 0;
}

export type IFileCreate = Omit<IFile, 'id'>;

export type IFileUpdate = Omit<IFile, 'id'>;

export type FileResponse = ResponseBase<IFile>;

export type FilesResponse = ResponseBase<IFile[]>;
