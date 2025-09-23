// library
import React from 'react';
import {
  useEffect,
  useState
} from '@wordpress/element';
import {
  BlockEditorProvider,
  BlockList, WritingFlow,
  BlockInspector,
  ButtonBlockAppender,
  privateApis as blockEditorPrivateApis
} from "@wordpress/block-editor";
import { registerCoreBlocks } from '@wordpress/block-library';
import { unlock } from './private/lock-unlock';

// css
import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';

// local
import Navbar from './components/Navbar';
import "./styles/index.css";

const { PrivateInserterLibrary } = unlock(blockEditorPrivateApis);


const Skeleton = () => {

  // Todo: Make a separate file and modular structure
  useEffect(() => {
    registerCoreBlocks();
  });

  // block elements for editor, fill with fetched blocks for edit and save
  const [blocks, setBlocks] = useState([]);

  // inserter panel
  const [isInserterOpen, setIsInserterOpen] = useState(false);
  const handleInserterOpen = () => {
    setIsInserterOpen(!isInserterOpen);
  }

  // settings panel
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const handleSettingsPanelOpen = () => {
    setIsSettingsPanelOpen(!isSettingsPanelOpen);
  }

  return (
    // editor container
    <div className='skeleton'>
      <BlockEditorProvider
        value={blocks}
        onInput={setBlocks}
        onChange={setBlocks}
      >
        {/* navbar */}
        <div>
          <Navbar
            handleInserterOpen={handleInserterOpen}
            handleSettingsPanelOpen={handleSettingsPanelOpen}
          />
        </div>

        <div className='block-editor-area'>

          {/* inserter panel */}
          {isInserterOpen &&
            <div>
              <PrivateInserterLibrary
                showMostUsedBlocks={true}
                showInserterHelpPanel={true}
                onSelect={() => {
                  // Optionally close inserter after selection  
                  setIsInserterOpen(false);
                }}
                onClose={() => setIsInserterOpen(false)}
              />
            </div>
          }

          {/* content editor area */}
          <div className='editor-area'>
            <WritingFlow>
              <BlockList />
            </WritingFlow>
            <ButtonBlockAppender />

          </div>

          {/* settings/slotfill panel */}
          {isSettingsPanelOpen &&
            <div>
              Settings Panel
            </div>
          }
        </div>

        {/* breadcrumbs */}
        <div>
          5
        </div>
      </BlockEditorProvider>
    </div>
  )
}

export default Skeleton;
