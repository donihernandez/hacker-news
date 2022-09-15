import type { FC } from 'react';
import { useState } from 'react';
import { IChildrenProps, ITab, ITabsContext } from '../../typings';
import { TabsContext } from './context';

const TabsProvider: FC<IChildrenProps> = ({ children }) => {
    const [tabs, setTabs] = useState<ITab[]>([
        {
            id: 1,
            isFirst: true,
            title: 'All',
        },
        {
            id: 2,
            isLast: true,
            title: 'My Faves',
        },
    ]);
    const [activeTab, setActiveTab] = useState(1);

    const value: ITabsContext = {
        activeTab,
        setActiveTab,
        setTabs,
        tabs,
    };

    return (
        <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
    );
};

export { TabsProvider };
