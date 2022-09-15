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
    const [currentOption, setCurrentOption] = useState('Select your news');
    const options = [
        {
            image: '/images/angular.png',
            value: 'angular',
        },
        {
            image: '/images/react.png',
            value: 'reactjs',
        },
        {
            image: '/images/vue.png',
            value: 'vuejs',
        },
    ];

    const value: ITabsContext = {
        activeTab,
        currentOption,
        options,
        setActiveTab,
        setCurrentOption,
        setTabs,
        tabs,
    };

    return (
        <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
    );
};

export { TabsProvider };
