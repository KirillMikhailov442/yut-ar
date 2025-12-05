"use client";

import styles from "./Projects.module.scss";
import clsx from "clsx";
import { Plus } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { useModals } from "@/store/modals";
import Item from "./Item";

const ProjectScreen = () => {
  const projects = useProjects();
  const { openModal } = useModals();

  return (
    <ul className={styles.grid}>
      {projects.data?.items.map((project) => (
        <Item key={project.id} {...project} />
      ))}
      <li>
        <button
          onClick={() => openModal("addProject")}
          className={clsx(styles.gridItem, styles.add)}
        >
          Создать <Plus size={20} />
        </button>
      </li>
    </ul>
  );
};

export default ProjectScreen;
