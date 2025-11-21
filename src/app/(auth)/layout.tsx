import Link from 'next/link';

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <header className="flex">
        <Link href={'/'} className="auth-back">
          НА ГЛАВНУЮ
        </Link>
      </header>
      <div className="flex-grow flex p-8 max-lg:p-4">{children}</div>
    </div>
  );
};

export default AuthLayout;
