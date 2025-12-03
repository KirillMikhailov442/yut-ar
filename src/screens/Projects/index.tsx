'use client';

import styles from './Projects.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { Plus } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';
import Loading from './Loading';
import { useModals } from '@/store/modals';

const ProjectScreen = () => {
  const projects = useProjects();
  const { openModal } = useModals();

  if (projects.isLoading) return <Loading />;

  return (
    <ul className={styles.grid}>
      {projects.data?.items.map(project => (
        <li key={project.id}>
          <Link href={'/editor/2'} className={styles.gridItem}>
            {project.title}
            <br />
            {`${project.width} x ${project.height}`}
          </Link>
        </li>
      ))}
      <li>
        <button
          onClick={() => openModal('addProject')}
          className={clsx(styles.gridItem, styles.add)}>
          Создать <Plus size={20} />
        </button>
      </li>
    </ul>
  );
};

export default ProjectScreen;
