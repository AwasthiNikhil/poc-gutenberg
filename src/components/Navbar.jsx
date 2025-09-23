import React from 'react'
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

const Navbar = ({ handleInserterOpen, handleSettingsPanelOpen }) => {
    return (
        <>
            <div>
                <Button onClick={handleInserterOpen}>Inserter</Button>

                <div>Undo</div>
                <div>Redo</div>
                <div>Document Overview</div>
            </div>
            <div>
                <div>
                    Commands
                </div>
            </div>
            <div>
                <div>
                    Save draft
                </div>
                <div>
                    <Button onClick={handleSettingsPanelOpen}>Settings</Button>
                </div>
                <div>
                    Publish
                </div>
            </div>
        </>
    )
}

export default Navbar