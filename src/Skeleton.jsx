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
import { useStateWithHistory } from '@wordpress/compose';

// css
import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';

// local
import Navbar from './components/Navbar';

// local css
import "./styles/index.css";

const { PrivateInserterLibrary } = unlock(blockEditorPrivateApis);


const Skeleton = () => {

  // Todo: Make a separate file and modular structure
  useEffect(() => {
    registerCoreBlocks();
  });

  // block elements for editor, fill with fetched blocks for edit and save
  const { value, setValue, hasUndo, hasRedo, undo, redo } =
    useStateWithHistory({ blocks: [] });

  // inserter panel and document overview panel (panel on left)
  const [activePanel, setActivePanel] = useState(null);
  const handleInserterOpen = () => {
    setActivePanel(activePanel === 'inserter' ? null : 'inserter');
  };
  const handleDocumentOverviewPanelOpen = () => {
    setActivePanel(activePanel === 'documentOverview' ? null : 'documentOverview');
  };

  // settings panel
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const handleSettingsPanelOpen = () => {
    setIsSettingsPanelOpen(!isSettingsPanelOpen);
  }

  // document overview panel
  // const [isDocumentOverviewPanelOpen, setIsDocumentOverviewPanelOpen] = useState(false);
  // const handleDocumentOverviewPanelOpen = () => {
  //   setIsDocumentOverviewPanelOpen(!isDocumentOverviewPanelOpen);
  // }


  return (
    // editor container
    <div className='skeleton'>
      <BlockEditorProvider
        value={value.blocks}
        selection={value.selection}
        onInput={(blocks, { selection }) =>
          setValue({ blocks, selection }, true)
        }
        onChange={(blocks, { selection }) =>
          setValue({ blocks, selection }, false)
        }
      >
        {/* navbar */}
        <div>
          <Navbar
            handleInserterOpen={handleInserterOpen}
            undo={undo}
            redo={redo}
            hasUndo={hasUndo}
            hasRedo={hasRedo}
            handleDocumentOverviewPanelOpen={handleDocumentOverviewPanelOpen}
            handleSettingsPanelOpen={handleSettingsPanelOpen}
          />
        </div>

        <div className='block-editor-area'>

          {activePanel &&
            <div>
              {/* inserter panel */}
              {activePanel === 'inserter' && (
                <PrivateInserterLibrary
                  showInserterHelpPanel={true}
                  onClose={() => setActivePanel(null)}
                />
              )}
              
              {/* document overview panel */}
              {activePanel === 'documentOverview' && (
                <div>
                  Document Overview
                </div>
              )}
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
