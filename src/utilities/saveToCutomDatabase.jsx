import { serialize } from "@wordpress/blocks";
export const saveToCustomDatabase = async (blocks, selection) => {
    // Serialize blocks to HTML format manually  
    const serializedContent = serialize(blocks);
    console.log("Saving: ");
    console.log(serializedContent);
    return 0;
    // // Send to your custom API  
    // await fetch('localhost:8000/api/save', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         content: serializedContent,
    //         blocks: blocks,
    //         selection: selection
    //     })
    // });
};

