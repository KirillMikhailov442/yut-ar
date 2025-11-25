import React from 'react';
import { Spin } from 'antd';

const LoadingScreen = () => {
  return (
    <div className="h-[100dvh] w-[100dvw] flex items-center justify-center">
      <Spin size="large" className="spinner" />
    </div>
  );
};

export default LoadingScreen;
