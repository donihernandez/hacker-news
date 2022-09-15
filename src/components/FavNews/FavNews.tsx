import type { FC } from 'react';
import { useNewsContext } from '../../contexts';
import { NewsCard, NewsContainer } from '../common';

import './FavNews.css';

const FavNews: FC = () => {
    const { news } = useNewsContext();

    const getFavNews = () => {
        return news.filter(newsItem => newsItem.isFavorite);
    };

    return (
        <section className="fav__news__container">
            <NewsContainer>
                {getFavNews().map((newsItem, index) => {
                    return (
                        <NewsCard
                            author={newsItem.author}
                            date={newsItem.date}
                            id={newsItem.id}
                            isFavorite={newsItem.isFavorite}
                            key={index}
                            title={newsItem.title}
                            url={newsItem.url}
                        />
                    );
                })}
            </NewsContainer>
        </section>
    );
};

export default FavNews;
