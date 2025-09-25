import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, RichText, 	BlockControls,
	__experimentalBlockAlignmentMatrixControl as BlockAlignmentMatrixControl, } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { FormFileUpload, TextControl, TextareaControl } from '@wordpress/components';


registerBlockType('custom/team', {
    title: __('Team Member', 'custom'),
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" aria-hidden="true" focusable="false"><path d="M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fillRule="evenodd"></path></svg>,
    category: 'media',

    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        imageUrl: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
        imageAlt: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'alt',
        },
    },

    edit: ({ attributes, setAttributes }) => {
        const { title, content, imageUrl, imageAlt } = attributes;

        // Image upload handler
        const onSelectImage = (media) => {
            setAttributes({
                imageUrl: media.url,
                imageAlt: media.alt || media.filename,
            });
        };

        // Team Name and Description handlers
        const handleTeamNameChange = (value) => {
            setAttributes({ title: value });
        };

        const handleDescriptionChange = (value) => {
            setAttributes({ content: value });
        };
        const { contentPosition } = attributes;
        return (<>
            <BlockControls>
                <BlockAlignmentMatrixControl
                    label={__('Change content position')}
                    value={contentPosition}
                    onChange={(nextPosition) =>
                        setAttributes({
                            contentPosition: nextPosition,
                        })
                    }
                />
            </BlockControls>
            <InspectorControls>
                <div>
                    <h1> Hi
                    </h1>
                </div>

            </InspectorControls>


            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                {/* Image upload */}
                <FormFileUpload
                    __next40pxDefaultSize
                    icon={<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z" /></svg>}
                    accept="image/*"
                    onChange={onSelectImage}
                >
                    Upload
                </FormFileUpload>

                {/* Team Name */}
                <TextControl
                    __nextHasNoMarginBottom
                    __next40pxDefaultSize
                    label="Team Name"
                    value={title}
                    onChange={handleTeamNameChange}
                />

                {/* Description */}
                <TextareaControl
                    __nextHasNoMarginBottom
                    label="Description"
                    value={content}
                    onChange={handleDescriptionChange}
                    placeholder="Description"
                />
            </div>

        </>
        );
    },

    save: ({ attributes }) => {
        const { title, content, imageUrl, imageAlt } = attributes;

        return (
            <div className="team-member-block">
                {imageUrl && <img src={imageUrl} alt={imageAlt} />}
                {title && <RichText.Content tagName="h2" value={title} />}
                {content && <RichText.Content tagName="p" value={content} />}
            </div>
        );
    },
});
