import Link from 'next/link';

const NotFoundScreen = () => {
  return (
    <div className="h-[100dvh] flex flex-col gap-2 items-center justify-center">
      <h5>Ничего не найдено</h5>
      <Link
        className="bg-[var(--black)] text-white p-2 rounded-lg pointer"
        href={'/'}>
        На главную
      </Link>
    </div>
  );
};

export default NotFoundScreen;
