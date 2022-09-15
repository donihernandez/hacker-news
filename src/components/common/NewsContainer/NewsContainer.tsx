import type { FC } from 'react';
import { IChildrenProps } from '../../../typings';

import './NewsContainer.css';

const NewsContainer: FC<IChildrenProps> = ({ children }) => {
    return <section className="news__container">{children}</section>;
};

export { NewsContainer };
