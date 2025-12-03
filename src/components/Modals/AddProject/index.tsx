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
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { BottomSheet } from 'react-spring-bottom-sheet';
import z from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Введите название проекта'),
  description: z.string().min(1, 'Введите описание проекта'),
  width: z.number().min(0.5, 'Выберие ширину для комнаты'),
  height: z.number().min(0.5, 'Выберие высоту для комнаты'),
});

type FormData = z.infer<typeof schema>;

const AddProjectModal = () => {
  const { modals, toggleModal, closeModal } = useModals();
  const [isTablet] = useMediaQuery(['(max-width: 768px)']);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      width: 0.5,
      height: 0.5,
    },
  });

  if (isTablet) {
    return (
      <BottomSheet
        header={<h5>Создать проект</h5>}
        snapPoints={({ maxHeight }) => [maxHeight * 0.9]}
        open={modals.addProject}
        style={{ backgroundColor: 'red', height: '100%' }}
        onDismiss={() => closeModal('addProject')}>
        <form className="flex flex-col !h-[100%] gap-4 !px-2 !py-5">
          <Field.Root invalid={!!errors.name?.message}>
            <Input {...register('name')} placeholder="Название" />
            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
          </Field.Root>
          <div>
            <p>Размер комнаты (в метрах)</p>
            <div className="flex flex-col items-center gap-3">
              <Field.Root className="basis-1/2">
                <NumberInput.Root
                  step={0.1}
                  min={0.1}
                  max={10}
                  w={'100%'}
                  defaultValue={'0.5'}>
                  <NumberInput.Control />
                  <NumberInput.Input
                    {...register('width')}
                    placeholder="Ширина"
                  />
                </NumberInput.Root>
                <Field.HelperText>Ширина</Field.HelperText>
              </Field.Root>
              <Field.Root className="basis-1/2">
                <NumberInput.Root
                  step={0.1}
                  min={0.1}
                  max={10}
                  w={'100%'}
                  defaultValue={'0.5'}>
                  <NumberInput.Control />
                  <NumberInput.Input
                    {...register('height')}
                    placeholder="Высота"
                  />
                </NumberInput.Root>
                <Field.HelperText>Высота</Field.HelperText>
              </Field.Root>
            </div>
          </div>
          <Field.Root invalid={!!errors.description?.message}>
            <Textarea
              {...register('description')}
              resize={'none'}
              placeholder="Описание проекта"
              rows={4}
            />
            <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
          </Field.Root>
          <Button
            disabled={Object.keys(errors).length > 0}
            className="!mt-auto"
            bg="yellow.400"
            color="black"
            _hover={{ bg: 'yellow.500' }}>
            Создать
          </Button>
        </form>
      </BottomSheet>
    );
  }

  return (
    <Dialog.Root
      placement={'center'}
      open={modals.addProject}
      onOpenChange={() => toggleModal('addProject')}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header className="flex items-cente justify-between">
              <b className="!text-lg">Создать проект</b>
              <button
                className={'p-3'}
                onClick={() => closeModal('addProject')}>
                <X size={24} />
              </button>
            </Dialog.Header>
            <Dialog.Body>
              <form
                onSubmit={handleSubmit(data => {
                  console.log(data);
                })}
                className="flex flex-col gap-4">
                <Field.Root invalid={!!errors.name?.message}>
                  <Input {...register('name')} placeholder="Название" />
                  <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                </Field.Root>
                <div>
                  <p>Размер комнаты (в метрах)</p>
                  <div className="flex items-center gap-3">
                    <Field.Root className="basis-1/2">
                      <NumberInput.Root
                        step={0.1}
                        min={0.1}
                        max={10}
                        w={'100%'}
                        defaultValue={'0.5'}>
                        <NumberInput.Control />
                        <NumberInput.Input
                          {...register('width')}
                          placeholder="Ширина"
                        />
                      </NumberInput.Root>
                      <Field.HelperText>Ширина</Field.HelperText>
                    </Field.Root>
                    <Field.Root className="basis-1/2">
                      <NumberInput.Root
                        step={0.1}
                        min={0.1}
                        max={10}
                        w={'100%'}
                        defaultValue={'0.5'}>
                        <NumberInput.Control />
                        <NumberInput.Input
                          {...register('height')}
                          placeholder="Высота"
                        />
                      </NumberInput.Root>
                      <Field.HelperText>Высота</Field.HelperText>
                    </Field.Root>
                  </div>
                </div>
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
