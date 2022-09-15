import type { FC } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { useNewsContext } from '../../../contexts';
import { INews } from '../../../typings';

import './NewsCard.css';

const NewsCard: FC<INews> = ({ author, title, isFavorite, id, url, date }) => {
    const { news, setNews } = useNewsContext();

    const toggleFavorite = () => {
        const findNews = news.find(news => news.id === id);

        if (findNews) {
            findNews.isFavorite = !findNews.isFavorite;
            const filteredNews = news.filter(news => news.id !== id);
            filteredNews.push(findNews);
            setNews(filteredNews);
        }
    };

    const getHoursFromNow = () => {
        dayjs.extend(relativeTime);
        return dayjs(date, 'hours').fromNow();
    };

    return (
        <article className="card">
            <div className="card__details">
                <div className="card__hour__details">
                    <img
                        alt="clock icon"
                        className="clock__image"
                        src="/images/clock.svg"
                    />
                    <span className="card__hour__description">
                        {getHoursFromNow()} by {author}
                    </span>
                </div>
                <a
                    className="navigation__link"
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                >
                    <div className="card__description">{title}</div>
                </a>
            </div>
            <div className="card__favorites">
                {isFavorite ? (
                    <img
                        alt="Full Heart"
                        className="card__favorites__button"
                        onClick={toggleFavorite}
                        src="/images/full_heart.svg"
                    />
                ) : (
                    <img
                        alt="Full Heart"
                        className="card__favorites__button"
                        onClick={toggleFavorite}
                        src="/images/empty_heart.svg"
                    />
                )}
            </div>
        </article>
    );
};

export { NewsCard };
