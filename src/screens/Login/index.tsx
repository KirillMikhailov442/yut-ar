import React from 'react';
import styles from './Login.module.scss';
import Input from '@/components/UI/Input';
import Link from 'next/link';

const LoginScreen = () => {
  return (
    <form className={styles.form}>
      <h4 className={styles.title}>Авторизация</h4>
      <div className="flex flex-col flex-grow gap-5 mt-10">
        <Input type="email" placeholder="адрес эл. почты:" />
        <Input type="password" placeholder="пароль:" />
        <button className={styles.button}>Войти</button>
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
