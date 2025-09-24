import React from 'react';
import {BlockCanvas} from '@wordpress/block-editor';

// canvas styles
import componentsStyles from '@wordpress/components/build-style/style.css?raw';  
import blockEditorContentStyles from '@wordpress/block-editor/build-style/content.css?raw';  
import blocksStyles from '@wordpress/block-library/build-style/style.css?raw';  
  
const contentStyles = [  
  { css: componentsStyles },  
  { css: blockEditorContentStyles },  
  { css: blocksStyles },  
];

const Canvas = () => {
    return (
        <BlockCanvas
            height="100%"
            styles={contentStyles} />
    )
}

export default Canvas