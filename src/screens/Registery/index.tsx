import React from 'react';
import styles from './Registery.module.scss';
import Input from '@/components/UI/Input';

const RegisteryScreen = () => {
  return (
    <form className={styles.form}>
      <h4 className={styles.title}>Регистрация</h4>
      <div className="flex flex-col flex-grow gap-5 mt-10">
        <Input type="email" placeholder="адрес эл. почты:" />
        <Input type="password" placeholder="пароль:" />
        <button className={styles.button}>Подтвердить</button>
      </div>
    </form>
  );
};

export default RegisteryScreen;
