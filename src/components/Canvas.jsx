import React from "react";
import { BlockCanvas, BlockList } from "@wordpress/block-editor";
import { PlainText } from "@wordpress/block-editor";

// canvas styles
import componentsStyles from "@wordpress/components/build-style/style.css?raw";
import blockEditorContentStyles from "@wordpress/block-editor/build-style/content.css?raw";
import blocksStyles from "@wordpress/block-library/build-style/style.css?raw";
import blocksEditorStyles from "@wordpress/block-library/build-style/editor.css?raw";
import blockLibraryThemeStyles from "@wordpress/block-library/build-style/theme.css?raw";
import formatLibraryStyles from "@wordpress/format-library/build-style/style.css?raw";
import blockEditorStyles from "@wordpress/block-editor/build-style/style.css?raw";

const contentStyles = [
  { css: componentsStyles },
  { css: blockEditorContentStyles },
  { css: blockLibraryThemeStyles }, // Theme styles  
  { css: blocksStyles },
  { css: blocksEditorStyles },
  { css: formatLibraryStyles },
  { css: blockEditorStyles },
];

const Canvas = ({title, setTitle}) => {
  return (
    <BlockCanvas height="100%" 
    styles={contentStyles}
    >
      <div>
        <PlainText
          placeholder="Title..."
          onChange={(newTitle) => setTitle(newTitle)}
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            border: "none",
            outline: "none",
            padding: "12px 0",
          }}
          value={title}
        />
      </div>
      <BlockList />
    </BlockCanvas>
  );
};

export default Canvas;
