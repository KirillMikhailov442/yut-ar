import projectService from '@/api/services/project';
import {
  IProject,
  IProjectCreate,
  IProjectUpdate,
  ProjectResponse,
} from '@/types/Project';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => projectService.findAll(),
  });
};

export const useProject = (id: number) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => projectService.findById(id),
    enabled: !!id,
  });
};

export const useProjectCreate = (
  onSuccess?: (data: IProject) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['project', 'create'],
    mutationFn: (data: IProjectCreate) => projectService.create(data),
    onSuccess,
    onError,
  });
};

export const useProjectUpdate = (
  onSuccess?: (data: ProjectResponse) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['project', 'update'],
    mutationFn: ({ body, id }: { body: IProjectUpdate; id: number }) =>
      projectService.update(body, id),
    onSuccess,
    onError,
  });
};

export const useProjectDelete = (
  onSuccess?: (data: string) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['project', 'delete'],
    mutationFn: (id: number) => projectService.deleteById(id),
    onSuccess,
    onError,
  });
};
