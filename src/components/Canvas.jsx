import React from 'react';
import {BlockCanvas, BlockList} from '@wordpress/block-editor';
import { PlainText } from '@wordpress/block-editor';

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
        // <BlockCanvas
        //     height="100%"
        //     styles={contentStyles} />
<BlockCanvas  
            height="100%"  
            styles={contentStyles}  
        >  
            <div>  
                <PlainText 
                placeholder="Title..."
                onChange={()=>{}}
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  border: "none",
                  outline: "none",
                  padding: "12px 0"
                }}
                />
            </div>  
            <BlockList />  
        </BlockCanvas>  

    )
}

export default Canvas