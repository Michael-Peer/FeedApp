import axios from 'axios';

const URL = 'https://dev.tedooo.com/feed.json';

const fetchFeed = async () => {
        const res = await axios.get(URL)
        return res.data
}

const sendImppression = async (userId: string, itemId: string) => {
    try {
        await axios.post(`https://www.tedooo.com/?userId=${userId}&itemId=${itemId}`)        
    } catch (error) {
        //handle error
        console.log('error');
        
    }
}

export {
    fetchFeed, 
    sendImppression
}