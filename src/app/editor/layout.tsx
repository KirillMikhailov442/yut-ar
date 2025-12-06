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
import {
  useProjectToProductCreate,
  useProjectToProducts,
} from '@hooks/useProjectToProduct';
import { CELL_SIZE } from '@constants/cell';

const EditorLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const furnituresEditor = useEditor();
  const catalog = useCatalog();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
  );

  const id = useParams<{ id: string }>().id;
  const project = useProject(Number(id));
  const projectToProduct = useProjectToProducts();
  const projectToProductCreate = useProjectToProductCreate();

  useEffect(() => {
    if (project.isError) return;

    if (project.data) {
      furnituresEditor.setSize(project.data.width, project.data.height);
    }
  }, [project.isPending]);

  useEffect(() => {
    if (catalog.furnitures.length > 0) {
      const filteredProducts = projectToProduct.data?.items.filter(
        item => item.project_id === Number(id),
      );

      filteredProducts?.forEach(product => {
        const findedFurniture = catalog.furnitures.find(
          furniture => furniture.id == product.product_id,
        );

        furnituresEditor.addFurniture({
          id: Number(findedFurniture?.id),
          x: product.coordinate_x,
          y: product.coordinate_y,
          width: Number(findedFurniture?.width),
          height: Number(findedFurniture?.height),
          img: findedFurniture?.img,
          title: String(findedFurniture?.title),
          rotation: Number(findedFurniture?.rotation),
          cost: String(findedFurniture?.cost),
        });
      });
    }
  }, [catalog.furnitures.length, projectToProduct.isSuccess]);

  if (project.isPending || projectToProduct.isPending) return <LoadingScreen />;

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

        projectToProductCreate.mutate({
          project_id: Number(id),
          product_id: data.id,
          coordinate_x: Math.round(x / CELL_SIZE) * CELL_SIZE,
          coordinate_y: Math.round(y / CELL_SIZE) * CELL_SIZE,
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
