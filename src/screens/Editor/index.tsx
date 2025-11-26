'use client';

import NavBar from './components/Navbar';
import Catalog from './components/Catalog';
import Editor from './components/Editor';
import FurnituresSheet from '@/components/Modals/Furnitures';
import { Splitter, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';

const EditorScreen = () => {
  const [isLaptop] = useMediaQuery(['(max-width: 1024px)']);
  const [sizes, setSizes] = useState<number[]>([20, 80]);

  if (isLaptop) {
    return (
      <div className="flex flex-col h-[100vh] w-[100dvw] overflow-hidden">
        <NavBar />
        <Editor />
        <FurnituresSheet />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[100vh] w-[100dvw] overflow-hidden">
      <NavBar />
      <Splitter.Root
        size={sizes}
        onResize={details => setSizes(details.size)}
        panels={[
          { id: 'catalog', minSize: 25 },
          { id: 'editor', minSize: 50 },
        ]}>
        <Splitter.Panel id="catalog">
          <Catalog />
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="catalog:editor" />
        <Splitter.Panel className="flex" id="editor">
          <Editor />
        </Splitter.Panel>
      </Splitter.Root>
      <FurnituresSheet />
    </div>
  );
};

export default EditorScreen;
