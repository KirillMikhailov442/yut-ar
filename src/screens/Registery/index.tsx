'use client';

import styles from './Registery.module.scss';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Button, Field, Input } from '@chakra-ui/react';
import { useUserCreate, useUserLogin } from '@hooks/useUsers';

const schema = z.object({
  name: z.string().min(1, 'Введите имя').max(16, 'Слишком длинное имя'),
  surname: z
    .string()
    .min(1, 'Введите фамилию')
    .max(16, 'Слишком длинная фамилия'),
  email: z.string().email('Некорректная почта').min(1, 'Введите email'),
  password: z.string().min(8, 'Пароль должен быть не меньше 8 символов'),
});

type FormData = z.infer<typeof schema>;

const RegisteryScreen = () => {
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const login = useUserLogin(data => {
    Cookies.set('user', JSON.stringify(data.user));
    Cookies.set('token', data.token);
    replace('/projects');
  });
  const create = useUserCreate(() => {
    login.mutate({
      login: getValues('email'),
      password: getValues('password'),
    });
  });

  return (
    <form
      onSubmit={handleSubmit(({ name, surname, password, email }) => {
        create.mutate({
          name,
          surname,
          password: password.charAt(0).toUpperCase() + password.slice(1),
          login: email,
        });
      })}
      className={styles.form}>
      <h4 className={styles.title}>Регистрация</h4>
      <div className="flex flex-col flex-grow gap-2 mt-10">
        <Field.Root invalid={!!errors.name?.message}>
          <Field.Label>Имя</Field.Label>
          <Input {...register('name')} placeholder="Введите имя" />
          <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.surname?.message}>
          <Field.Label>Фамилия</Field.Label>
          <Input {...register('surname')} placeholder="Введите фамилию" />
          <Field.ErrorText>{errors.surname?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.email?.message}>
          <Field.Label>Адрес эл. пояты</Field.Label>
          <Input {...register('email')} placeholder="Введите адрес эл. почты" />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.password?.message}>
          <Field.Label>Пароль</Field.Label>
          <Input
            {...register('password')}
            type="password"
            placeholder="Введите пароль"
          />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>
        <Button
          loading={create.isPending}
          disabled={Object.keys(errors).length > 0}
          type="submit"
          className="!mt-4"
          bg="yellow.400"
          color="black"
          _hover={{ bg: 'yellow.500' }}>
          Зарегистрироваться
        </Button>
        <p className="font-bold text-center !mt-3">
          Есть аккаунт?{' '}
          <Link className="!text-[var(--yellow)]" href={'/login'}>
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisteryScreen;
