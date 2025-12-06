import styles from './Header.module.scss';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useModals } from '@/store/modals';

const Header = () => {
  const { openModal } = useModals();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={'/'} className={styles.logo}>
          УЮТ
          <br />
          AR
        </Link>
        <Link href={'/about'} className={styles.link}>
          о нас
          <svg
            className="absolute bottom-0 left-0 h-1 w-full"
            viewBox="0 0 100 10"
            preserveAspectRatio="none">
            <path
              d="M0,5 Q 25,0 50,5 T 100,5"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </Link>
        <Link href={'/cooperation'} className={styles.link}>
          сотрудничество
          <svg
            className="absolute bottom-0 left-0 h-1 w-full"
            viewBox="0 0 100 10"
            preserveAspectRatio="none">
            <path
              d="M0,5 Q 25,0 50,5 T 100,5"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </Link>
        <Link href={'/community'} className={styles.link}>
          сообщество
          <svg
            className="absolute bottom-0 left-0 h-1 w-full"
            viewBox="0 0 100 10"
            preserveAspectRatio="none">
            <path
              d="M0,5 Q 25,0 50,5 T 100,5"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </Link>
        <div className="flex items-center gap-5">
          <Link href={'/login'} className={styles.button}>
            создать проект <br />
            прямо сейчас
            <svg
              className="absolute bottom-0 left-0 h-1 w-full"
              viewBox="0 0 100 10"
              preserveAspectRatio="none">
              <path
                d="M0,5 Q 25,0 50,5 T 100,5"
                stroke="currentColor"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <button onClick={() => openModal('menu')} className={styles.menu}>
            <Menu size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
