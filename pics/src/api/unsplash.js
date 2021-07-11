import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xJ7_26kuJtt0yAsembFlWz8Yl5QJz07LrXihSlDfBgk'
    }
});
