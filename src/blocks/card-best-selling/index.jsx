import { registerBlockType } from '@wordpress/blocks';
import {
    InspectorControls,
    RichText,
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    PanelColorSettings,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    TextControl,
    TextareaControl,
    Button,
    Placeholder,
} from '@wordpress/components';
registerBlockType('custom/best-selling-package', {
    title: __('Card Best Selling', 'custom'),
    icon: 'cart',
    category: 'text',
    attributes: {
        // --- FIX 1: Changed 'html' to 'text' for simple text fields ---
        tourName: {
            type: 'string',
            source: 'text',
            selector: 'h3.card-title',
            default: '', // Always provide a default
        },
        location: {
            type: 'string',
            source: 'text',
            selector: 'p.card-location',
            default: '',
        },
        description: {
            type: 'string',
            source: 'html', // 'html' is correct for a multi-line description with <p> tags
            selector: 'p.card-description',
            default: '',
        },
        numberOfDays: {
            type: 'number',
            default: 0,
        },
        numberOfPeople: {
            type: 'number',
            default: 0,
        },
        originalPrice: {
            type: 'number',
            default: 0,
        },
        discountedPrice: {
            type: 'number',
            default: 0,
        },
        photoUrl: {
            type: 'string',
            source: 'attribute',
            selector: 'img.card-image',
            attribute: 'src',
        },
        photoAlt: {
            type: 'string',
            source: 'attribute',
            selector: 'img.card-image',
            attribute: 'alt',
        },
        titleColor: {
            type: 'string',
        },
        priceColor: {
            type: 'string',
        },
    },
    supports: {
        html: false,
    },
    edit: ({ attributes, setAttributes }) => {
        const {
            tourName,
            location,
            description,
            numberOfDays,
            numberOfPeople,
            originalPrice,
            discountedPrice,
            photoUrl,
            photoAlt,
        } = attributes;
        return (
            <div>
                <figure>
                    <a href="#" aria-label="link">
                        <img loading="lazy" src="https://nepalsocialtreks.com/storage/tour-thumbnails/LpjAHMDG6qCWg08vbU9vLCqVmdjyTqEcHoj0DTHU.webp" alt="everest base camp trek" width="1200" height="1219" />
                    </a>
                    <div >
                        <span>
                            7% Off
                        </span>
                    </div>
                    <div>
                        <div >
                            <span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_11779_30)">
                                        <path d="M13.8078 4.62308C13.6425 4.48191 13.4091 4.45216 13.2135 4.54737L10.2209 6.00424L7.4129 2.76669C7.30905 2.64692 7.1583 2.57812 6.99976 2.57812C6.84122 2.57812 6.6905 2.64692 6.58663 2.76669L3.77864 6.00421L0.786031 4.54734C0.590442 4.45216 0.35709 4.48188 0.19166 4.62305C0.0262306 4.76423 -0.0398319 4.99004 0.0234142 5.19812L2.10154 12.0341C2.17157 12.2644 2.384 12.4219 2.62476 12.4219H11.3748C11.6155 12.4219 11.828 12.2644 11.898 12.0341L13.9761 5.19815C14.0394 4.99006 13.9733 4.76426 13.8078 4.62308ZM10.9694 11.3281H3.03008L1.43454 6.07955L3.67733 7.17141C3.90002 7.2798 4.16761 7.22506 4.32984 7.03803L6.99976 3.95967L9.66971 7.03803C9.83192 7.22509 10.0996 7.27977 10.3222 7.17141L12.565 6.07955L10.9694 11.3281Z" fill="white"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11779_30">
                                            <rect width="14" height="14" fill="currentColor" transform="translate(0 0.5)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>                                    </span>
                            <span>Stand face-to-face with Everest</span>
                        </div>
                    </div>
                </figure>
                <div>
                    <div>
                        <div>
                            <span>
                                <a href="https://nepalsocialtreks.com/destinations/nepal/everest-region/" aria-label="link">
                                    Everest Region</a>,
                                <a href="https://nepalsocialtreks.com/destinations/nepal/" aria-label="link">
                                    Nepal</a>
                            </span>
                            <span>
                                <a href="https://nepalsocialtreks.com/destinations/nepal/everest-region/" aria-label="link">
                                    Everest Region</a>,
                                <a href="https://nepalsocialtreks.com/destinations/nepal/" aria-label="link">
                                    Nepal</a>
                                <button type="button">
                                    show less
                                </button>
                            </span>
                        </div>
                    </div>
                    <h3>
                        <a>
                            Everest Base Camp Trek
                        </a>
                    </h3>
                    <div class="mt-6">
                        <ul>
                            <li>
                                <span>
                                    <span class="icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2255_765)">
                                                <path d="M10.0013 5.00008V10.0001L13.3346 11.6667M18.3346 10.0001C18.3346 14.6025 14.6037 18.3334 10.0013 18.3334C5.39893 18.3334 1.66797 14.6025 1.66797 10.0001C1.66797 5.39771 5.39893 1.66675 10.0013 1.66675C14.6037 1.66675 18.3346 5.39771 18.3346 10.0001Z" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2255_765">
                                                    <rect fill="white" height="20" width="20"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    15
                                    Days
                                </span>
                            </li>
                            <li>
                                <span>
                                    <span class="icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3346 2.8898C14.5694 3.50343 15.418 4.77762 15.418 6.25C15.418 7.72238 14.5694 8.99657 13.3346 9.6102M15.0013 13.972C16.2608 14.5419 17.3951 15.4708 18.3346 16.6667M1.66797 16.6667C3.29004 14.6021 5.49228 13.3333 7.91797 13.3333C10.3437 13.3333 12.5459 14.6021 14.168 16.6667M11.668 6.25C11.668 8.32107 9.98904 10 7.91797 10C5.8469 10 4.16797 8.32107 4.16797 6.25C4.16797 4.17893 5.8469 2.5 7.91797 2.5C9.98904 2.5 11.668 4.17893 11.668 6.25Z" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"></path>
                                        </svg>
                                    </span>
                                    15
                                    People
                                </span>
                            </li>

                        </ul>
                    </div>
                    <div></div>
                    <div>
                        <span>
                            <del>
                                $1,530
                            </del>
                            <strong>
                                $1,430
                            </strong>
                        </span>
                        <a href="#" aria-label="link">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        );
    },
    save: ({ attributes }) => {
        const blockProps = useBlockProps.save({
            className: 'best-selling-card',
        });
        const {
            tourName,
            location,
            description,
            numberOfDays,
            numberOfPeople,
            originalPrice,
            discountedPrice,
            photoUrl,
            photoAlt,
        } = attributes;

    },
});