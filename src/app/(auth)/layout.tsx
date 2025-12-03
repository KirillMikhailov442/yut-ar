import { Provider } from '@/components/ui/provider';
import Link from 'next/link';

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider>
      <div className="h-[100vh] flex flex-col">
        <header className="flex">
          <Link href={'/'} className="auth-back">
            НА ГЛАВНУЮ
          </Link>
        </header>
        <div className="flex-grow flex p-8 max-lg:p-4">{children}</div>
      </div>
    </Provider>
  );
};

export default AuthLayout;
