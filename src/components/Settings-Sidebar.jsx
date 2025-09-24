import React from 'react'
import { __experimentalListView as ListView } from '@wordpress/block-editor';
import { privateApis as blockEditorPrivateApis } from '@wordpress/block-editor';
import { unlock } from '../private/lock-unlock';
import { DocumentOutline } from '@wordpress/editor';
import { TableOfContents } from '@wordpress/editor';

// css
import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';
const { PrivateInserterLibrary, TabbedSidebar  } = unlock(blockEditorPrivateApis);

const SettingsSidebar = () => {
    return (
        <div className='sidebar'>
           
        </div>
    )
}

export default SettingsSidebar
