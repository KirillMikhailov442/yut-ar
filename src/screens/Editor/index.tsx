'use client';

import NavBar from './components/Navbar';
import Catalog from './components/Catalog';
import Editor from './components/Editor';
import { Splitter, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import FurnituresSheet from '@components/Modals/Furnitures';
import { ArrowRightFromLine } from 'lucide-react';
const EditorScreen = () => {
  const [isLaptop] = useMediaQuery(['(max-width: 1024px)']);
  const [sizes, setSizes] = useState<number[]>([25, 75]);

  if (isLaptop) {
    return (
      <>
        <div className="flex flex-col h-[100vh] w-[100dvw]">
          <NavBar />
          <Editor />
        </div>
        <FurnituresSheet />
      </>
    );
  }

  return (
    <div className="relative flex flex-col h-[100vh] w-[100dvw] overflow-hidden">
      <NavBar />
      {sizes[0] == 0 && (
        <button
          onClick={() => setSizes([20, 80])}
          className="absolute top-1/2 left-2 h-[60px] w-[40px] bg-[var(--white)]">
          <ArrowRightFromLine size={20} />
        </button>
      )}
      <Splitter.Root
        size={sizes}
        onResize={details => {
          if (details.size[0] <= 16) {
            setSizes([0, 100]);
          } else setSizes(details.size);
        }}
        panels={[{ id: 'catalog' }, { id: 'editor', minSize: 50 }]}>
        <Splitter.Panel
          defaultValue={25}
          style={{ overflow: 'visible' }}
          id="catalog">
          {sizes[0] != 0 && <Catalog />}
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
