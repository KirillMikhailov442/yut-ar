'use client';

import { DragDropContext } from '@hello-pangea/dnd';
import { FC, ReactNode } from 'react';

const EditorLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <DragDropContext onDragEnd={() => {}}>{children}</DragDropContext>;
};

export default EditorLayout;
