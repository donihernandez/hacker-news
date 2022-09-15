import { FC, useEffect } from 'react';
import { useState } from 'react';
import { getNews } from '../../api';
import { mapNews } from '../../lib';
import { client } from '../../lib/client';
import { IChildrenProps } from '../../typings';
import { NewsContext } from './context';

const NewsProvider: FC<IChildrenProps> = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [news, setNews] = useState([]);
    const [favoriteNews, setFavoriteNews] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentOption, setCurrentOption] = useState('Select your news');
    const options = [
        {
            image: '/images/angular.png',
            value: 'angular',
        },
        {
            image: '/images/react.png',
            value: 'reactjs',
        },
        {
            image: '/images/vue.png',
            value: 'vuejs',
        },
    ];

    const updateNews = async () => {
        const newsData = await getNews(currentOption, currentPage.toString());
        setTotalPages(newsData.nbPages);
        const mappedNews = mapNews(newsData.hits);
        setNews(mappedNews);
        setCurrentPage(0);
    };

    const navigatePages = async () => {
        const newsData = await getNews(currentOption, currentPage.toString());
        const mappedNews = mapNews(newsData.hits);
        setNews(mappedNews);
    };

    useEffect(() => {
        if (currentOption !== 'Select your news') {
            updateNews();
        }
    }, [currentOption]);

    useEffect(() => {
        if (currentOption !== 'Select your news') {
            navigatePages();
        }
    }, [currentPage]);

    const value = {
        currentOption,
        currentPage,
        news,
        options,
        setCurrentOption,
        setCurrentPage,
        setNews,
        setTotalPages,
        totalPages,
    };

    return (
        <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
    );
};

export { NewsProvider };
