import productService from '@/api/services/product';
import { IProduct, IProductCreate, IProductUpdate } from '@/types/Product';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => productService.findAll(),
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.findById(id),
  });
};

export const useProductCreate = (
  onSuccess?: (data: IProduct) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['product', 'create'],
    mutationFn: (body: IProductCreate) => productService.create(body),
    onSuccess,
    onError,
  });
};

export const useProductUpdate = (
  onSuccess?: (data: IProduct) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['product', 'update'],
    mutationFn: ({ body, id }: { body: IProductUpdate; id: number }) =>
      productService.update(body, id),
    onSuccess,
    onError,
  });
};

export const useProductDelete = (
  onSuccess?: (data: string) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['product', 'delete'],
    mutationFn: (id: number) => productService.deleteById(id),
    onSuccess,
    onError,
  });
};
