import type { FC } from 'react';

import { Dropdown, NewsCard, NewsContainer, Pagination } from '../common';

import './AllNews.css';
import { useNewsContext } from '../../contexts';

const AllNews: FC = () => {
    const { news, totalPages } = useNewsContext();

    return (
        <section className="all__news__container">
            <Dropdown />

            <NewsContainer>
                {news.map((newsItem, index) => (
                    <NewsCard
                        author={newsItem.author}
                        date={newsItem.date}
                        id={newsItem.id}
                        isFavorite={newsItem.isFavorite}
                        key={index}
                        title={newsItem.title}
                        url={newsItem.url}
                    />
                ))}
            </NewsContainer>

            {totalPages > 0 && <Pagination />}
        </section>
    );
};

export default AllNews;
