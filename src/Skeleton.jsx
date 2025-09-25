// library
import React from "react";
import { useEffect, useState } from "@wordpress/element";
import { BlockEditorProvider } from "@wordpress/block-editor";
import { registerCoreBlocks } from "@wordpress/block-library";
import { useStateWithHistory } from "@wordpress/compose";
import { Modal, Button } from "@wordpress/components";
import '@wordpress/format-library';
// css
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";

// local
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SettingsSidebar from "./components/Settings-Sidebar";
import Canvas from "./components/Canvas";
import Breadcrumb from "./components/Breadcrumb";
import { getFromDatabase } from "./utilities/getFromDatabase";
import { loadPost } from "./utilities/getFromDatabase";

// local css
import "./styles/index.css";

//main skeleton component
const Skeleton = () => {
  // Todo: Make a separate file for custom blocks and modular structure
  useEffect(() => {
    registerCoreBlocks();
  });

  // toggle for post list modal
  const [postListToggle, setPostListToggle] = useState(false);

  // post list
  const [posts, setPosts] = useState([]);

  // title for a post
  const [title, setTitle] = useState();

  // block elements for editor, fill with fetched blocks for edit and save
  const { value, setValue, hasUndo, hasRedo, undo, redo } = useStateWithHistory(
    { blocks: [] }
  );

  // inserter panel and document overview panel (panel on left)
  const [activePanel, setActivePanel] = useState(null);
  const handleInserterOpen = () => {
    setActivePanel(activePanel === "inserter" ? null : "inserter");
  };
  const handleDocumentOverviewPanelOpen = () => {
    setActivePanel(
      activePanel === "documentOverview" ? null : "documentOverview"
    );
  };

  // settings panel
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const handleSettingsPanelOpen = () => {
    setIsSettingsPanelOpen(!isSettingsPanelOpen);
  };

  // display post list
  const handlePostListToggle = () => {
    setPostListToggle(!postListToggle);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getFromDatabase();
      if (posts !== -1) {
        setPosts(posts);
      } else {
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  // jsx
  return (
    // editor container
    <div className="skeleton">
      {/* Post list modal */}
      {postListToggle && (
        <Modal title="Posts" onRequestClose={() => setPostListToggle(false)}>
          <div>
            <ul>
              {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((post) => (
                  <li
                    key={post.id}
                    className="post-item">
                    <div>{post.title || "Untitled"}</div>
                    <Button onClick={async () => {
                      const postData = await loadPost(post.id);

                      setTitle(post.title);
                      await setValue(postData);
                      console.log("Post loaded successfully into editor.");

                      setPostListToggle(false);
                    }}>Load</Button>
                  </li>
                ))
              ) : (
                <div>No posts available.</div>
              )}
            </ul>
          </div>
        </Modal>
      )}
      <BlockEditorProvider
        value={value.blocks}
        selection={value.selection}
        onInput={(blocks, { selection }) =>
          setValue({ blocks, selection }, true)
        }
        onChange={(blocks, { selection }) => {
          setValue({ blocks, selection }, false);
        }}
      >
        {/* navbar */}
        <div>
          <Navbar
            handlePostListToggle={handlePostListToggle}
            handleInserterOpen={handleInserterOpen}
            undo={undo}
            redo={redo}
            hasUndo={hasUndo}
            hasRedo={hasRedo}
            handleDocumentOverviewPanelOpen={handleDocumentOverviewPanelOpen}
            handleSettingsPanelOpen={handleSettingsPanelOpen}
            // for saving
            title={title}
            blocks={value.blocks}
            selection={value.selection}
          />
        </div>

        <div className="block-editor-area">
          {/* Left Sidebar  */}
          {activePanel && (
            <Sidebar
              activePanel={activePanel}
              setActivePanel={setActivePanel}
            />
          )}

          {/* content editor area */}
          <div className="editor-area">
            <Canvas title={title} setTitle={setTitle} />
          </div>

          {/* settings/slotfill panel */}
          {isSettingsPanelOpen && (
            <SettingsSidebar onClose={handleSettingsPanelOpen} />
          )}
        </div>

        {/* breadcrumbs */}
        <div className="footer">
          <Breadcrumb />
        </div>
      </BlockEditorProvider>
    </div>
  );
};

export default Skeleton;
