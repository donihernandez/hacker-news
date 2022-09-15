import type { FC } from 'react';
import { Dropdown, NewsCard } from '../common';
import { NewsContainer } from '../common/NewsContainer';

import './AllNews.css';

const AllNews: FC = () => {
    return (
        <section className="all__news__container">
            <Dropdown />

            <NewsContainer>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </NewsContainer>
        </section>
    );
};

export default AllNews;
