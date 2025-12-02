'use client';

import styles from './Login.module.scss';
import Input from '@/components/UI/Input';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const schema = z.object({
  email: z.string().email('Некорректная почта').min(1, 'Введите email'),
  password: z.string().min(8, 'Пароль должен быть не меньше 8 символов'),
});

type FormData = z.infer<typeof schema>;

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { replace } = useRouter();

  return (
    <form
      onSubmit={handleSubmit(() => {
        // temporary measure
        Cookies.set('user', 'authorized');
        replace('/projects');
      })}
      className={styles.form}>
      <h4 className={styles.title}>Авторизация</h4>
      <div className="flex flex-col flex-grow gap-5 mt-10">
        <Input
          {...register('email')}
          error={errors.email?.message}
          type="email"
          placeholder="адрес эл. почты:"
        />
        <Input
          {...register('password')}
          error={errors.password?.message}
          type="password"
          placeholder="пароль:"
        />
        <button
          disabled={Object.keys(errors).length > 0}
          className={styles.button}>
          Войти
        </button>
        <p className="font-bold text-center mt-auto">
          Нет аккаунта?{' '}
          <Link className="text-[var(--yellow)]" href={'/registery'}>
            Регисрация
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginScreen;
