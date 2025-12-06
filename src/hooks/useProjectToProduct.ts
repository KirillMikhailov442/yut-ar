import {
  IProjectToProduct,
  IProjectToProductCreate,
} from '@/types/ProjectToProduct';
import projectToProductService from '@api/services/projectToProduct';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useProjectToProducts = () => {
  return useQuery({
    queryKey: ['project-to-products'],
    queryFn: () => projectToProductService.findAll(),
  });
};

export const useProjectToProduct = (id: number) => {
  return useQuery({
    queryKey: ['project-to-products', id],
    queryFn: () => projectToProductService.findById(id),
  });
};

export const useProjectToProductCreate = (
  onSuccess?: (data: IProjectToProduct) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['project-to-products', 'create'],
    mutationFn: (body: IProjectToProductCreate) =>
      projectToProductService.create(body),
    onSuccess,
    onError,
  });
};

export const useProjectToProductUpdate = (
  onSuccess?: (data: IProjectToProduct) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['project-to-products', 'update'],
    mutationFn: (body: IProjectToProductCreate) =>
      projectToProductService.update(body),
    onSuccess,
    onError,
  });
};

export const useProjectToProductDelete = (
  onSuccess?: (data: string) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['project-to-products', 'delete'],
    mutationFn: (id: number) => projectToProductService.deleteById(id),
    onSuccess,
    onError,
  });
};
