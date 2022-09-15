import { client } from '../lib';

const getNews = async (query = 'angular', page = '0') => {
    const news = await client.get(`search_by_date?query=${query}&page=${page}`);

    if (news.data) {
        return news.data;
    }

    return null;
};

export { getNews };
