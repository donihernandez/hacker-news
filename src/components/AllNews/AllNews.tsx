import type { FC } from 'react';
import { Dropdown } from '../common';

import './AllNews.css';

const AllNews: FC = () => {
    return (
        <section className="all__news__container">
            <Dropdown />
        </section>
    );
};

export default AllNews;
