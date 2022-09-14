import React from 'react';
import { FC } from 'react';
import { useTabsContext } from '../../contexts/TabsContext';
import { IChildrenProps, ITabProps } from '../../typings';

import './Tabs.css';

const TabsContainer: FC<IChildrenProps> = ({ children }) => {
    return <div className="tabs__container">{children}</div>;
};

const Tab: FC<ITabProps> = ({ id, isFirst, isLast, children }) => {
    const { activeTab, setActiveTab } = useTabsContext();

    return (
        <button
            className={`tab ${activeTab === id && 'active'} ${
                isFirst && 'first'
            } ${isLast && 'last'}`}
            onClick={() => setActiveTab(id)}
        >
            {children}
        </button>
    );
};

export { TabsContainer, Tab };
