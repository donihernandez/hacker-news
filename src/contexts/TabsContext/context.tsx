import { createContext, useContext } from 'react';
import { ITabsContext } from '../../typings';

const TabsContext = createContext<ITabsContext>({
    activeTab: 1,
    setActiveTab: () => null,
    setTabs: () => null,
    tabs: [],
});
TabsContext.displayName = 'TabsContext';

const useTabsContext = () => {
    return useContext(TabsContext);
};

export { useTabsContext, TabsContext };
