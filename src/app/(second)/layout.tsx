import React from 'react';
import Second from '../../components/layouts/Second';

const SecondLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Second>{children}</Second>;
};

export default SecondLayout;
