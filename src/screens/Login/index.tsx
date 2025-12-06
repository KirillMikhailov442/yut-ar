'use client';

import styles from './Login.module.scss';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Button, Field, Input } from '@chakra-ui/react';
import { useUserLogin } from '@/hooks/useUsers';

const schema = z.object({
  email: z.string().email('Некорректная почта').min(1, 'Введите email'),
  password: z.string().min(8, 'Пароль должен быть не меньше 8 символов'),
});

type FormData = z.infer<typeof schema>;

const LoginScreen = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const login = useUserLogin(data => {
    Cookies.set('user', JSON.stringify(data.user));
    Cookies.set('token', data.token);
    push('/projects');
  });

  return (
    <form
      onSubmit={handleSubmit(data => {
        login.mutate({ login: data.email, password: data.password });
      })}
      className={styles.form}>
      <h5 className={styles.title}>Авторизация</h5>
      <div className="flex flex-col flex-grow gap-3 mt-10">
        <Field.Root invalid={!!errors.email?.message}>
          <Field.Label>Адрес эл. почты</Field.Label>
          <Input {...register('email')} placeholder="Введите адрес эл. почты" />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.email?.message}>
          <Field.Label>Пароль</Field.Label>
          <Input
            {...register('password')}
            type="password"
            placeholder="Введите пароль"
          />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>
        <Button
          loading={login.isPending}
          disabled={Object.keys(errors).length > 0}
          type="submit"
          className="!mt-4"
          bg="yellow.400"
          color="black"
          _hover={{ bg: 'yellow.500' }}>
          Войти
        </Button>
        <p className="font-bold text-center !mt-5">
          Нет аккаунта?{' '}
          <Link className="!text-[var(--yellow)]" href={'/registery'}>
            Регистрация
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginScreen;
