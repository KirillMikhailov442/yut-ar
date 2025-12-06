'use client';

import { useModals } from '@/store/modals';
import {
  Button,
  Dialog,
  Field,
  Input,
  NumberInput,
  Portal,
  Textarea,
  useMediaQuery,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProjectCreate } from '@hooks/useProjects';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';
import 'react-spring-bottom-sheet/dist/style.css';

const schema = z.object({
  name: z.string().min(1, 'Введите название проекта'),
  description: z.string().min(1, 'Введите описание проекта'),
});

type FormData = z.infer<typeof schema>;

const AddProjectModal = () => {
  const { push } = useRouter();
  const { modals, toggleModal, closeModal } = useModals();
  const create = useProjectCreate(data => {
    push(`/editor/${data.id}`);
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <Dialog.Root
      placement={'center'}
      open={modals.addProject}
      onOpenChange={() => {
        reset();
        toggleModal('addProject');
      }}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content className="!bg-[var(--white)]">
            <Dialog.Header className="flex items-center justify-between">
              <b className="!text-lg">Создать проект</b>
              <button
                className={'p-3'}
                onClick={() => {
                  reset();
                  closeModal('addProject');
                }}>
                <X size={24} />
              </button>
            </Dialog.Header>
            <Dialog.Body>
              <form
                onSubmit={handleSubmit(data => {
                  create.mutate({
                    title: data.name,
                    description: data.description,
                  });
                })}
                className="flex flex-col gap-4">
                <Field.Root invalid={!!errors.name?.message}>
                  <Input {...register('name')} placeholder="Название" />
                  <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                </Field.Root>
                <Field.Root invalid={!!errors.description?.message}>
                  <Textarea
                    {...register('description')}
                    resize={'none'}
                    placeholder="Описание проекта"
                    rows={4}
                  />
                  <Field.ErrorText>
                    {errors.description?.message}
                  </Field.ErrorText>
                </Field.Root>
                <Button
                  loading={create.isPending}
                  disabled={Object.keys(errors).length > 0}
                  type="submit"
                  bg="yellow.400"
                  color="black"
                  _hover={{ bg: 'yellow.500' }}>
                  Создать
                </Button>
              </form>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddProjectModal;
