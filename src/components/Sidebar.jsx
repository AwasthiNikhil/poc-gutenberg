import React from 'react'
import { __experimentalListView as ListView } from '@wordpress/block-editor';
import { privateApis as blockEditorPrivateApis } from '@wordpress/block-editor';
import { unlock } from '../private/lock-unlock';
import { DocumentOutline } from '@wordpress/editor';
import { TableOfContents } from '@wordpress/editor';

// css
import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';
const { PrivateInserterLibrary, TabbedSidebar } = unlock(blockEditorPrivateApis);

const Sidebar = ({ activePanel, setActivePanel }) => {
    {/* Todo */ }
    {/* list view button */ }
    {/* <ListView /> //for listview subtab   */ }
    {/* <TableOfContents /> //for outline subtab   */ }
    {/* <DocumentOutline/>  //put this in table of contents for document heading hierarchy*/ }
    return (
        <div className='sidebar'>
            {/* inserter panel */}
            {activePanel === 'inserter' && (
                <PrivateInserterLibrary
                    showInserterHelpPanel={true}
                    onClose={() => setActivePanel(null)}
                />
            )}

            {/* document overview panel */}
            {activePanel === 'documentOverview' && (
                <TabbedSidebar
                    tabs={[
                        {
                            name: 'list-view',
                            title: 'List View',
                            panel: (
                                <div>
                                    <ListView />
                                </div>
                            ),
                        },
                        {
                            name: 'outline',
                            title: 'Outline',
                            panel: (
                                <div>
                                    {/* <TableOfContents /> */}
                                    <DocumentOutline />
                                    {/* <ListViewOutline /> */}
                                </div>
                            ),
                        },
                    ]}
                    onClose={() => setActivePanel(null)}
                    onSelect={(tabName) => {
                        // maybe track which tab is selected  
                        console.log('Selected tab:', tabName);
                    }}
                    defaultTabId="list-view"
                    closeButtonLabel="Close Document Overview"
                />
            )}
        </div>
    )
}

export default Sidebar
