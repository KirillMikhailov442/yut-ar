'use client';

import { NextPage } from 'next';
import Hero from './components/Hero';
import About from './components/About';
import List from '@/components/List';
import Footer from './components/Footer';

const HomeScreen: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <List
        title={
          <>
            С нами процесс ремонта - это не про стресс, а про{' '}
            <span>удовольствие от исполнения желаний</span>
          </>
        }
        items={[
          {
            title: 'Удобный интерфейс',
            description: (
              <p>
                Никаких сложных меню — откройте приложение и приступайте к
                созданию интерьера прямо сейчас!
              </p>
            ),
          },
          {
            title: 'Интерьер, который можно купить',
            description: (
              <p>
                Не нужно искать похожие модели по всему интернету: в{' '}
                <b>УЮТAR</b> вы работаете с реальной мебелью местных
                производителей. Один клик — и вы на странице товара в магазине!
              </p>
            ),
          },
          {
            title: 'Бюджет проекта перед глазами',
            description: <p>Сервис расчитает затраты на проект за вас!</p>,
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default HomeScreen;
