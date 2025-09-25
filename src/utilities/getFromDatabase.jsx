import { parse } from "@wordpress/blocks";

export const getFromDatabase = async () => {
    // // Send to  API  
    try {
        const response = await fetch('http://127.0.0.1:8000/api/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Response received: ", data);

        return data;
    } catch (error) {
        console.error('Error: ', error);
        return [];
    }
};
export const loadPost = async (id) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/posts/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("Post received(all): ", data);  
        return data;
        // console.log("Post received(not parsed): ", data.content);
        // console.log("Post received: ", parse(data.content));
    } catch (error) {
        console.error('Error: ', error);
        return [];
    }
};

