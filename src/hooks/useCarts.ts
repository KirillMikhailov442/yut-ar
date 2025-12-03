import { useMutation, useQuery } from '@tanstack/react-query';
import cartService from '@/api/services/cart';
import { CartResponse, ICartCreate, ICartUpdate } from '@/types/Cart';

export const useCarts = () => {
  return useQuery({
    queryKey: ['carts'],
    queryFn: () => cartService.findAll(),
  });
};

export const useCart = (id: number) => {
  return useQuery({
    queryKey: ['cart', id],
    queryFn: () => cartService.findById(id),
  });
};

export const useCartCreate = (
  onSuccess?: (data: CartResponse) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['cart', 'create'],
    mutationFn: (body: ICartCreate) => cartService.create(body),
    onSuccess,
    onError,
  });
};

export const useCartUpdate = (
  onSuccess?: (data: CartResponse) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['cart', 'udapte'],
    mutationFn: ({ body, id }: { body: ICartUpdate; id: number }) =>
      cartService.update(body, id),
    onSuccess,
    onError,
  });
};

export const useCartDelete = (
  onSuccess?: (data: string) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['cart', 'delete'],
    mutationFn: (id: number) => cartService.deleteById(id),
    onSuccess,
    onError,
  });
};
