import { createContext, useContext } from 'react';
import { INewsContext } from '../../typings';

const NewsContext = createContext<INewsContext>({
    currentOption: '',
    currentPage: 1,
    news: [],
    options: [],
    setCurrentOption: () => null,
    setCurrentPage: () => null,
    setNews: () => null,
    setTotalPages: () => null,
    totalPages: 0,
});
NewsContext.displayName = 'NewsContext';

const useNewsContext = () => {
    return useContext(NewsContext);
};

export { useNewsContext, NewsContext };
