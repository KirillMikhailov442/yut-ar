'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import React from 'react';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={client}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Bureau, sans-serif',
          },
        }}>
        {children}
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default Providers;
