import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1/',
});
