import NavBar from './components/Navbar';
import { Splitter } from 'antd';
import Catalog from './components/Catalog';
import Editor from './components/Editor';

const EditorScreen = () => {
  return (
    <div className="flex flex-col h-[100dvh] w-[100dvw] overflow-hidden">
      <NavBar />
      <Splitter className="flex-grow">
        <Catalog />
        <Splitter.Panel
          className="flex"
          collapsible={{
            start: true,
            end: true,
            showCollapsibleIcon: true,
          }}>
          <Editor />
        </Splitter.Panel>
      </Splitter>
    </div>
  );
};

export default EditorScreen;
