import { useMutation, useQuery } from '@tanstack/react-query';
import userService from '@/api/services/user';
import { IUser, IUserCreate, IUserUpdate } from '@/types/User';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => userService.findAll(),
  });
};

export const useUser = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => userService.findById(id),
    enabled: !!id,
  });
};

export const useUserCreate = (
  onSuccess?: (data: IUser) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['user', 'create'],
    mutationFn: (body: IUserCreate) => userService.create(body),
    onSuccess,
    onError,
  });
};

export const useUserUpdate = (
  onSuccess?: (data: IUser) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['user', 'update'],
    mutationFn: ({ body, id }: { body: IUserUpdate; id: number }) =>
      userService.update(body, id),
    onSuccess,
    onError,
  });
};

export const useUserDelete = (
  onSuccess?: (data: string) => void,
  onError?: ({ message }: { message: string }) => void,
) => {
  return useMutation({
    mutationKey: ['user', 'delete'],
    mutationFn: (id: number) => userService.deleteById(id),
    onSuccess,
    onError,
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['user', 'profile'],
    queryFn: () => userService.profile(),
  });
};
