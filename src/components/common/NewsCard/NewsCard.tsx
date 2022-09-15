import type { FC } from 'react';

import './NewsCard.css';

const NewsCard: FC = () => {
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
                        2 hours ago by author
                    </span>
                </div>
                <div className="card__description">
                    Event-driven state management in React using Storeon
                </div>
            </div>
            <div className="card__favorites">
                <img
                    alt="Full Heart"
                    className="card__favorites__button"
                    src="/images/full_heart.svg"
                />
            </div>
        </article>
    );
};

export { NewsCard };
