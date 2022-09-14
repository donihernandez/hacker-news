import type { FC } from 'react';
import { useState } from 'react';
import { IChildrenProps, ITab } from '../../typings';
import { TabsContext } from './context';

const TabsProvider: FC<IChildrenProps> = ({ children }) => {
   const [tabs, setTabs] = useState<ITab[]>([
    {
      id: 1,
      title: 'All',
      isFirst: true,
    },
    {
      id: 2,
      title: 'My Faves',
      isLast: true,
    }
   ])
    const [activeTab, setActiveTab] = useState(1);

    const value: any = {
        activeTab,
        setActiveTab,
        tabs,
        setTabs
    }

    return (
        <TabsContext.Provider
            value={value}>
            {children}
        </TabsContext.Provider>
    );
};

export { TabsProvider };
