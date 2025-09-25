import React from 'react'
import { BlockInspector } from '@wordpress/block-editor';
import { privateApis as blockEditorPrivateApis } from '@wordpress/block-editor';
import { unlock } from '../private/lock-unlock';
import {
    PostTaxonomiesPanel,
    PostAuthorPanel,
    PostSchedulePanel,
    PostURLPanel,
    PostExcerptPanel,
    PostFeaturedImagePanel,
    PostDiscussionPanel,
    PostTemplatePanel
} from '@wordpress/editor';

const { TabbedSidebar } = unlock(blockEditorPrivateApis);

const SettingsSidebar = ({ onClose }) => {
    return (
        <div className='sidebar'>
            <TabbedSidebar
                tabs={[
                    {
                        name: 'post',
                        title: 'Post',
                        panel: (
                            <div >
                                <PostExcerptPanel />
                                <PostAuthorPanel />
                                <PostSchedulePanel />
                                <PostURLPanel />
                                <PostFeaturedImagePanel />
                                <PostDiscussionPanel />
                                <PostTemplatePanel />
                                <PostTaxonomiesPanel />
                            </div>
                        ),
                    },
                    {
                        name: 'block',
                        title: 'Block',
                        panel: (
                            <div className="settings-block-panel">
                                    <BlockInspector />
                            </div>
                        ),
                    },
                ]}
                onClose={onClose}
                defaultTabId="post"
                closeButtonLabel="Close Settings"
            />
        </div>
    )
}

export default SettingsSidebar
