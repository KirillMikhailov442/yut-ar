'use client';

import { Provider } from '@/components/ui/provider';
import { useEditor } from '@store/editor';
import { IFurniture } from '@/types/Furniture';
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  useSensors,
  useSensor,
} from '@dnd-kit/core';
import { useProject } from '@hooks/useProjects';
import LoadingScreen from '@screens/Loading';
import { useParams } from 'next/navigation';
import { FC, ReactNode, useEffect } from 'react';
import { useCatalog } from '@store/catalog';
import FurnituresSheet from '@components/Modals/Furnitures';

const EditorLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const furnituresEditor = useEditor();
  const catalog = useCatalog();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5,
      },
    }),
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5,
      },
    }),
  );

  const id = useParams<{ id: string }>().id;
  const project = useProject(Number(id));

  useEffect(() => {
    if (project.isError) return;

    if (project.data) {
      furnituresEditor.setSize(project.data.width, project.data.height);
    }
  }, [project.isPending]);

  if (project.isPending) return <LoadingScreen />;

  return (
    <DndContext
      onDragStart={() => catalog.setActiveFurniture(0)}
      modifiers={[]}
      onDragEnd={event => {
        const { active, over } = event;

        if (over?.id != 'editor') return;

        const data = active.data.current as IFurniture;

        const x = Number(active.rect.current.translated?.left) - over.rect.left;
        const y = Number(active.rect.current.translated?.top) - over.rect.top;

        furnituresEditor.addFurniture({
          ...data,
          x,
          y,
        });
      }}
      sensors={sensors}>
      <Provider>
        {children}
        <FurnituresSheet />
      </Provider>
    </DndContext>
  );
};

export default EditorLayout;
