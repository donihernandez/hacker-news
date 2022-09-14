import { FC } from 'react';
import './Header.css';

const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__title">
                <h1>Hacker News</h1>
            </div>
        </header>
    );
};

export { Header };
