import React from "react";
import { Button } from "@wordpress/components";
import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  // __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { undo as undoIcon, redo as redoIcon } from "@wordpress/icons";
import { saveToCustomDatabase } from "../utilities/saveToCutomDatabase";

const Navbar = ({
  handlePostListToggle,
  handleInserterOpen,
  undo,
  redo,
  hasUndo,
  hasRedo,
  handleDocumentOverviewPanelOpen,
  handleSettingsPanelOpen,
  title,
  blocks,
  selection,
}) => {
  return (
    <div className="navbar">
      <ToggleGroupControl>
        {/* logo/list posts button */}
        <Button onClick={handlePostListToggle}>
          <img height="30" src="../logo.png" alt="Logo" />
        </Button>

        {/* Todo: Try change it to ToggleGroupControlOption */}
        {/* inserter button */}
        <Button onClick={handleInserterOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"></path>
          </svg>
        </Button>

        {/* undo button */}
        <Button
          onClick={undo}
          disabled={!hasUndo}
          icon={undoIcon}
          label="Undo"
          size="compact"
        ></Button>

        {/* redo button */}
        <Button
          onClick={redo}
          disabled={!hasRedo}
          icon={redoIcon}
          label="Redo"
          size="compact"
        ></Button>

        <Button onClick={handleDocumentOverviewPanelOpen}>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M3 6h11v1.5H3V6Zm3.5 5.5h11V13h-11v-1.5ZM21 17H10v1.5h11V17Z"></path>
          </svg>
        </Button>
      </ToggleGroupControl>

      <ToggleGroupControl>Commands</ToggleGroupControl>

      <ToggleGroupControl>
        <Button onClick={() => saveToCustomDatabase(title, blocks, selection)}>
          Save draft
        </Button>

        <Button onClick={handleSettingsPanelOpen}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4 14.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h8v13zm4.5-.5c0 .3-.2.5-.5.5h-2.5v-13H18c.3 0 .5.2.5.5v12z"
            ></path>
          </svg>
        </Button>

        <Button>Publish</Button>
      </ToggleGroupControl>
    </div>
  );
};

export default Navbar;
