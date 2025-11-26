'use client';

import { Provider } from '@/components/ui/provider';
import { DragDropContext } from '@hello-pangea/dnd';
import { FC, ReactNode } from 'react';

const EditorLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider>
      <DragDropContext
        onDragUpdate={() => {
          console.log('update');
        }}
        onDragEnd={e => {
          console.log(e);
        }}>
        {children}
      </DragDropContext>
    </Provider>
  );
};

export default EditorLayout;
