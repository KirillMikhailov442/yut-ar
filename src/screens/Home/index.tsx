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
      <List />
      <Footer />
    </div>
  );
};

export default HomeScreen;
