import axios from 'axios';

const URL = 'https://dev.tedooo.com/feed.json';
const BASE_URL = 'https://www.tedooo.com/'

const fetchFeed = async () => {
        const res = await axios.get(URL)
        return res.data
}

const sendImppression = async (userId: string, itemId: string) => {
    try {
        await axios.post(`${BASE_URL}?userId=${userId}&itemId=${itemId}`)        
    } catch (error) {
        //handle error
        console.log('error');
        
    }
}

export {
    fetchFeed, 
    sendImppression
}