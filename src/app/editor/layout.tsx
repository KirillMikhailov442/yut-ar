"use client";

import { Provider } from "@/components/ui/provider";
import { CELL_SIZE } from "@constants/cell";
import { useEditor } from "@store/editor";
import { IFurniture } from "@/types/Furniture";
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import { useProject } from "@hooks/useProjects";
import LoadingScreen from "@screens/Loading";
import { useParams } from "next/navigation";
import { FC, ReactNode, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const EditorLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const furnituresEditor = useEditor();
  const sensors = useSensors(useSensor(MouseSensor), useSensor(PointerSensor));

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
      modifiers={[]}
      onDragEnd={(event) => {
        const { active, over } = event;

        if (over?.id != "editor") return;

        const data = active.data.current as IFurniture;

        const x = Number(active.rect.current.translated?.left) - over.rect.left;
        const y = Number(active.rect.current.translated?.top) - over.rect.top;
        let width = Math.round(data.width / CELL_SIZE / 5) * CELL_SIZE;
        let height = Math.round(data.height / CELL_SIZE / 5) * CELL_SIZE;

        if (width < 100) width = 100;
        if (height < 100) height = 100;

        furnituresEditor.addFurniture({
          ...data,
          // @ts-ignore
          id: `${data.id}-${uuidv4()}`,
          x,
          y,
          width,
          height,
        });
      }}
      sensors={sensors}
    >
      <Provider>{children}</Provider>
    </DndContext>
  );
};

export default EditorLayout;
